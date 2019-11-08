const catalogue = {
	totalCredits: 243,
	semesters: {
		'sem-1': {
			id: '1',
			subjects: ['AP100', 'AP103', 'AP104', 'AP110', 'AP198', 'AR101']
		},
		'sem-2': {
			id: '2',
			subjects: ['AP203', 'AP204', 'AP298', 'AP415']
		},
		'sem-3': {
			id: '3',
			subjects: ['AP199', 'AP301', 'AP304', 'AP313', 'AP398', 'EL511', 'EL683', 'ELET8']
		},
		'sem-4': {
			id: '4',
			subjects: ['AP299', 'AP404', 'AP413', 'AP498', 'AP520', 'EL212', 'ELET10']
		},
		'sem-5': {
			id: '5',
			subjects: ['AP399', 'AP518', 'AP598', 'AR301', 'EL774', 'ELET8']
		},
		'sem-6': {
			id: '6',
			subjects: ['AP499', 'AP600', 'AP625', 'AP709', 'EL874', 'FN468', 'ELET8']
		},
		'sem-7': {
			id: '7',
			subjects: ['AP599', 'AP707', 'AP725', 'AP735', 'AP762', 'AR601']
		},
		'sem-8': {
			id: '8',
			subjects: ['AP699', 'AP836', 'AP862', 'ELET8']
		}
	},

	subjects: {
		'AP100': {
			code: 'AP100',
			name: 'Práticas de Oficina I',
			ementa: 'Estudo do desenvolvimento das técnicas, materiais e equipamentos próprios de ateliês artísticos e ou oficinas de madeira, visando a produção de uma poética visual.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AP103': {
			code: 'AP103',
			name: 'Pintura I',
			ementa: 'Fundamentos da linguagem pictórica: relação entre o Desenho e a Pintura. Introdução ao conhecimento de técnicas, materiais e suportes. Estudo das formas de representação da imagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP104': {
			code: 'AP104',
			name: 'Desenho Artístico I',
			ementa: 'Fundamentos da linguagem visual. Desenvolvimento da observação, percepção e apreensão por meio do desenho. A representação: formas e estruturas básicas.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP110': {
			code: 'AP110',
			name: 'Modelagem I',
			ementa: 'Modelagem e Moldagem em materiais diversos. Aplicação de escala para o projeto artístico. Elaboração de modelos maquetes em materiais diversos. Apresentação e elaboração de seminários e pesquisas de campo referentes ao universo próprio da criação artística.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'AP198': {
			code: 'AP198',
			name: 'História da Arte I',
			ementa: 'A disciplina terá como tema as manifestações artísticas do Renascimento, estabelecendo suas ligações e rupturas com a visualidade da Idade Média e examinando suas relações com a cultura clássica da Antiguidade. Estudos teóricos de textos fundamentais para esse campo de conhecimento. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'AR101': {
			code: 'AR101',
			name: 'Fundamentos Filosóficos da Arte Educação',
			ementa: 'O processo do conhecimento humano: vivências e significações. O conhecimento inteligível e o saber sensível. Linguagem e conhecimento conceitual (inteligível). Os signos estéticos como simbolização do saber sensível. A dimensão educacional da arte. Atualização dos saberes pré-adquiridos sobre a temática da disciplina.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'AP203': {
			code: 'AP203',
			name: 'Pintura II',
			ementa: 'Fundamentos da linguagem pictórica: composição e relações cromáticas. Estudo das formas de representação da imagem.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP103']
		},
		'AP204': {
			code: 'AP204',
			name: 'Desenho Artístico II',
			ementa: 'Fundamentos da linguagem visual. Instrumentalização técnica: materiais e suportes através da história do desenho. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico I.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP104']
		},
		'AP298': {
			code: 'AP298',
			name: 'História da Arte II',
			ementa: 'A disciplina terá como tema as manifestações artísticas dos Séculos XVII e primeira metade do XVIII na Europa. Compreende o estudo teórico de textos fundamentais para este campo de conhecimento. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP198']
		},
		'AP415': {
			code: 'AP415',
			name: 'Escultura I',
			ementa: 'A escultura moderna inserida nas principais vertentes artísticas da primeira metade do Século XX; investigações decorrentes da ruptura com valores e procedimentos tradicionais;compreensão do espaço, escala, construção do objeto artístico em relação ao ambiente e materiais. das escalas, lugares e materiais para a escultura. O objeto artístico.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP110']
		},
		'AP199': {
			code: 'AP199',
			name: 'Atividades Artísticas - Culturais - Ensino I',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ''
		},
		'AP301': {
			code: 'AP301',
			name: 'Elementos da Prática de Pesquisa',
			ementa: 'A investigação científica: lógica, linguagem e método. Estruturas formais e funcionais do discurso científico de distintos tipos de Pesquisa voltados para o grande campo das Artes e Humanidades. Subsídios para a leitura, produção e interpretação de textos científicos. O projeto de pesquisa: a pergunta condutora, a delimitação do problema, a hipótese, os objetivos, o embasamento teórico, metodológico e empírico. A investigação científica como prática social.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP304': {
			code: 'AP304',
			name: 'Desenho Artístico III',
			ementa: 'Da observação à representação: os sistemas de representação dos primórdios da história da arte ao período moderno. O desenho como meio de conhecimento sensível. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico II.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204']
		},
		'AP313': {
			code: 'AP313',
			name: 'Arte Fotográfica I',
			ementa: 'Introdução à Fotografia: Técnica e Equipamentos entre os processos Analógico e Digital. Expressividade e Gêneros Fotográficos. A imagem fotográfica e as Artes Visuais. Experimentações práticas e conceituações teóricas.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ''
		},
		'AP398': {
			code: 'AP398',
			name: 'História da Arte III',
			ementa: 'A disciplina acompanha e discute as transformações ocorridas na produção artística europeia, desde o surgimento do Neoclassicismo, seus desdobramentos na Academia, até o advento do Realismo no Século XIX. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP298']
		},
		'EL511': {
			code: 'EL511',
			name: 'Psicologia e Educação',
			ementa: 'Fundamentos teóricos e contribuições da psicologia para o estudo e compreensão de questões relacionadas à Educação, considerando as possibilidades de atuação docente. Inserção em contextos educativos e análise do cotidiano escolar.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'EL683': {
			code: 'EL683',
			name: 'Escola e Cultura',
			ementa: 'Dimensões da escola e da cultura na Pesquisa e no Conhecimento em Educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'AP299': {
			code: 'AP299',
			name: 'Atividades Artísticas - Culturais - Ensino II',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ''
		},
		'AP404': {
			code: 'AP404',
			name: 'Desenho Artístico IV',
			ementa: 'Da observação à construção: a estruturação do desenho como pensamento visual e seus sistemas de representação no período contemporâneo. Desenvolvimento da pesquisa de materiais e suportes. Aprofundamento das questões desenvolvidas na disciplina Desenho Artístico III.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP304']
		},
		'AP413': {
			code: 'AP413',
			name: 'Arte Fotográfica II',
			ementa: 'Desenvolvimento de Projetos poéticos em Fotografia. Produção de portifólio, ensaios fotográficos em diferentes gêneros, formatos e suportes. Panorama das principais Escolas Fotográficas e seus representantes.',
			semestre: 1,
			vector: {T:1, P:1, L:2, O:0, D:0, HS:4, SL:3, C:4},
			requisitos: ['AP313']
		},
		'AP498': {
			code: 'AP498',
			name: 'História da Arte IV',
			ementa: 'A disciplina acompanha e discute as transformações ocorridas na produção artística europeia, a partir da produção apresentada por Manet até o desenvolvimento das vanguardas históricas no começo do Século XX. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP398']
		},
		'AP520': {
			code: 'AP520',
			name: 'Gravura I',
			ementa: 'Introdução à gravura em relevo. A xilografia como linguagem expressiva. História da gravura européia: séculos XV à XVIII, e Brasil. A gravura de madeira de fio e de topo, linoleogravura e variantes. Impressões diretas e simples: monotipias, carimbos e pochoir.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ['AP204']
		},
		'EL212': {
			code: 'EL212',
			name: 'Política Educacional: Organização da Educação Brasileira',
			ementa: 'Estudo analítico das políticas educacionais no Brasil com destaque para: a política educacional no contexto das políticas públicas; organização dos sistemas de ensino considerando as peculiaridades nacionais e os contextos e legislação de ensino; organização da educação básica e do ensino superior.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:2, D:0, HS:6, SL:4, C:6},
			requisitos: ''
		},
		'ELET10': {
			code: 'ELET10',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:10, P:0, L:0, O:0, D:0, HS:0, SL:0, C:10},
			requisitos: ''
		},
		'AP399': {
			code: 'AP399',
			name: 'Atividades Artísticas - Culturais - Ensino III',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ''
		},
		'AP518': {
			code: 'AP518',
			name: 'Cerâmica I',
			ementa: 'Histórico da cerâmica. Desenvolvimento técnico e seus processos criativos, instrumentos, equipamentos e materiais. Processo e uso de óxidos na cerâmica.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP598': {
			code: 'AP598',
			name: 'História da Arte V',
			ementa: 'A disciplina aborda a produção artística europeia correspondente ao período que se estende do Pós-Segunda Guerra aos dias de hoje. É permeada pelo exercício de análise crítica (oral e escrita) dos diferentes autores do período.',
			semestre: 1,
			vector: {T:3, P:0, L:0, O:1, D:0, HS:4, SL:3, C:4},
			requisitos: ['AP498']
		},
		'AR301': {
			code: 'AR301',
			name: 'Psicologia do Desenvolvimento Aplicado às Artes I',
			ementa: 'A compreensão do desenvolvimento do ser humano em relação aos aspectos da habilidade motora, da ampliação do conhecimento e da capacidade criadora, levando-se em conta a expressão lúdica e o aprofundamento da percepção corporal, visual e auditiva do indivíduo. A experiência do fenômeno da arte, tanto em sua aproximação do material concreto quanto na realização de composições mais elaboradas, permitindo a compreensão do processo criativo e evidenciando a necessidade da expressão individual, experiência essa adequada às diversas fases evolutivas e variadas formas de aprendizagem.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'EL774': {
			code: 'EL774',
			name: 'Estágio Supervisionado I',
			ementa: 'Imersão no campo de trabalho, que propicie ao professor, em formação inicial, o contato com experiências, práticas e conhecimentos de natureza profissional, tanto na escola quanto em espaços educativos não escolares. Conhecer as características das instituições educativas no contexto socioeconômico cultural brasileiro, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['AA445', 'EL211', 'EL511', 'EL683']
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'AP499': {
			code: 'AP499',
			name: 'Atividades Artísticas - Culturais - Ensino IV',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:1, L:0, O:1, D:0, HS:2, SL:0, C:2},
			requisitos: ''
		},
		'AP600': {
			code: 'AP600',
			name: 'Metodologia de Pesquisa em Artes Visuais',
			ementa: 'Referenciais teóricos e metodológicos básicos para a realização de pesquisas no campo das artes visuais. Exercícios de elaboração de projetos, levantamento e organização de material empírico, elaboração de relatórios e redação visando ampliar o conhecimento sobre a língua portuguesa orientada para o discurso próprio do artista visual.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AA200']
		},
		'AP625': {
			code: 'AP625',
			name: 'História da Arte Brasileira I',
			ementa: 'A disciplina tem como conteúdo as manifestações artísticas do período da Colônia e do Império no Brasil. Leitura e análise críticas de textos pertinentes ao período. Desenvolvimento de Seminários.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ''
		},
		'AP709': {
			code: 'AP709',
			name: 'Arte e Novos Meios I',
			ementa: 'A disciplina propõe apresentar e discutir as linguagens tecnológicas enfocando a criação digital para construção da pesquisa artística: a imagem eletrônica videobjetos, videoinstalações e outros, ambientes interativos e imersivos. Ferramentas de tecnologia e Comunicação.',
			semestre: 1,
			vector: {T:1, P:3, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'EL874': {
			code: 'EL874',
			name: 'Estágio Supervisionado II',
			ementa: 'Atuação no campo de trabalho que propicie ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional, articulando as diferentes formas de ensino-aprendizagem, de gestão e de organização. Trabalho de campo orientado para a avaliação dos componentes da prática educativa, procurando compreendê-la a partir dos contextos nos quais se desenvolvem. Elaboração e implementação de projetos e propostas que ampliem as alternativas de intervenção e atuação.',
			semestre: 1,
			vector: {T:0, P:4, L:0, O:4, D:0, HS:8, SL:4, C:8},
			requisitos: ['EL774']
		},
		'FN468': {
			code: 'FN468',
			name: 'LIBRAS e Educação de Surdos',
			ementa: 'Conhecimentos teórico-práticos introdutórios de LIBRAS e dos parâmetros que a caracterizam como língua; constituição do sujeito surdo pela LIBRAS; história da educação e as organizações dos movimentos políticos dos surdos; comunidades surdas e suas produções culturais; abordagens educacionais no ensino da pessoa surda; projetos de educação bilíngue; leis de acessibilidade e de garantia à educação.',
			semestre: 1,
			vector: {T:2, P:2, L:0, O:0, D:0, HS:4, SL:4, C:4},
			requisitos: ''
		},
		'ELET8': {
			code: 'ELET8',
			name: 'Eletiva',
			ementa: '[]',
			semestre: 1,
			vector: {T:8, P:0, L:0, O:0, D:0, HS:0, SL:0, C:8},
			requisitos: ''
		},
		'AP599': {
			code: 'AP599',
			name: 'Atividades Artísticas - Culturais - Ensino V',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:0, C:3},
			requisitos: ''
		},
		'AP707': {
			code: 'AP707',
			name: 'Gestão de Espaços de Arte / Educação',
			ementa: 'Gestão de espaços da Educação Formal e não formal nos quais a Arte se insere como elemento unificador das atividades.',
			semestre: 1,
			vector: {T:3, P:1, L:0, O:1, D:0, HS:5, SL:4, C:5},
			requisitos: ''
		},
		'AP725': {
			code: 'AP725',
			name: 'História da Arte Brasileira II',
			ementa: 'Arte brasileira no século XX. As realizações da Semana de Arte Moderna e o Movimento Modernista. Arte e identidade nacional. Os desdobramentos do modernismo nos anos 30 e 40. As Bienais de São Paulo. A arte concreta e neoconcreta. O abstracionismo informal no Brasil. A &quot;pop-art&quot; brasileira. Novas tendências. Arte contemporânea. Desenvolve o exercício de análise crítica (oral e escrita) dos diferentes autores do período.',
			semestre: 1,
			vector: {T:2, P:0, L:0, O:1, D:0, HS:3, SL:2, C:3},
			requisitos: ['AP625']
		},
		'AP735': {
			code: 'AP735',
			name: 'Projeto Experimental em Artes Visuais I',
			ementa: 'Orientação para o aprimoramento do projeto poético do aluno, visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística e do campo da arte educação, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas, técnicas e da docência presentes nos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:0, C:8},
			requisitos: ['AA200', 'AA470', 'AP600']
		},
		'AP762': {
			code: 'AP762',
			name: 'Estágio Pedagógico I',
			ementa: 'Desenvolvimento de atividades de estágio, atividades de imersão no campo de trabalho que propiciem ao professor em formação o contato com experiências, práticas e conhecimentos de natureza profissional principalmente voltados para a Educação infantil. Estudo do sistema educacional brasileiro e suas diretrizes curriculares. Elaboração de Relatórios e Projetos pertinentes a este campo.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:4, D:0, HS:6, SL:2, C:6},
			requisitos: ['EL874']
		},
		'AR601': {
			code: 'AR601',
			name: 'Processos Pedagógicos Voltados para o Corpo na Arte',
			ementa: 'Discute conhecimentos e problemáticas que integram corpo, arte, educação e sociedade, apresentando fundamentos histórico-contextuais, teóricos, práticos e metodológicos direcionados ao ensino. Prepara o aluno para refletir e atuar no ensino da arte em ambientes de educação formal e não formal, dando suporte ao ensino-aprendizado dos conteúdos necessários à condução dos estágios e demais práticas de ensino. Estuda processos educacionais e produções artísticas de diferentes públicos, propondo também estratégias de inclusão para alunos com deficiência e comunidades com demandas educativas especiais.',
			semestre: 1,
			vector: {T:1, P:1, L:0, O:2, D:0, HS:4, SL:2, C:4},
			requisitos: ''
		},
		'AP699': {
			code: 'AP699',
			name: 'Atividades Artísticas - Culturais - Ensino VI',
			ementa: 'Ampliação e enriquecimento da cultura em geral, bem como de experiências pontuais no circuito artístico vigente. Participação como organizador, assistente ou expositor em atividades artísticas, culturais, ensino e científicas, workshops orientados (produção cultural, cenografia, mostra individual e coletiva em instituições especializadas e afins; visitas monitoradas a ateliês, exposições e acervos; atividades de extensão como congressos e seminários em áreas de Artes Visuais, História da Arte, Arte e Ensino e afins). Critérios a serem definidos pela Comissão de Graduação.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:1, D:0, HS:3, SL:0, C:3},
			requisitos: ''
		},
		'AP836': {
			code: 'AP836',
			name: 'Projeto Experimental em Artes Visuais II',
			ementa: 'Orientação para o aprimoramento do projeto poético do(a) aluno(a), visando o desenvolvimento de trabalhos artísticos que articulem os conhecimentos de arte e da linguagem artística, construídos através das teorias estudadas em disciplinas anteriores, assim como as competências para a criação e produção artística, desenvolvidas durante o curso. Aprofundamento das questões históricas, estéticas e técnicas dos processos de criação e pesquisas artísticas. Articulação entre teoria e prática, com ênfase na produção artística.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:12, D:0, HS:14, SL:0, C:14},
			requisitos: ['AA200', 'AA470', 'AP735']
		},
		'AP862': {
			code: 'AP862',
			name: 'Estágio Pedagógico II',
			ementa: 'Desenvolvimento de atividades de estágio que aprimorem o conhecimento da prática docente em espaços escolares e não-escolares; realização de atividades de imersão no campo de trabalho que propiciem ao professor em formação praticar elementos da arte-educação no ambiente profissional. Análise crítica de projetos praticados na realidade brasileira. Elaboração de Relatórios e Projetos pertinentes a este campo.',
			semestre: 1,
			vector: {T:0, P:2, L:0, O:6, D:0, HS:8, SL:2, C:8},
			requisitos: ['AP762']
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
