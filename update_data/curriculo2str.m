function curriculostr = curriculo2str(curriculo)
% Dado um curso+modalidade, converte todo o curriculo para um objeto JSON
    curriculostr = sprintf('const catalogue = {\n\ttotalCredits: %d,\n\tmaxCreditsSem: %d,\n\tsemesters: {',curriculo.creditos,curriculo.maxcreditossem);
    
    if ~isfield(curriculo,'semestre')
        curriculostr = sprintf('%s\n\t}\n};\n\nexport default catalogue;',curriculostr);
        return;
    end
    %% Semestres
    for i=1:length(curriculo.semestre)
        %curriculostr = [curriculostr '''sem-' num2str(i) ''': {id: ''' num2str(i) ''', subjects: ' '[''' strjoin(curriculo.semestre{i},''', ''') ''']}, '];
        semstr=strjoin(curriculo.semestre{i},''', ''');
        curriculostr = sprintf('%s\n\t\t''sem-%d'': {\n\t\t\tid: ''%d'',\n\t\t\tsubjects: [''%s'']\n\t\t},',curriculostr,i,i,semstr);
    end
    curriculostr(end)=[]; % remove virgula a mais
    curriculostr = sprintf('%s\n\t},\n\n',curriculostr);
    
    %% Eletivas
    if isfield(curriculo,'eletivas')
        eletivas = sprintf('\teletivas: {');
        for i=1:length(curriculo.eletivas)
            if isempty(curriculo.eletivas(i).disc)
                restriction = 'false';
            else
                restriction = 'true';
            end

            if isempty(curriculo.eletivas(i).disc)
                lista='';
            else
                lista=['''' strjoin(curriculo.eletivas(i).disc,''', ''') ''''];
            end

            eletivas = sprintf('%s\n\t\t''elet-%d'': {\n\t\t\tcredits: %d,\n\t\t\thasRestrictions: %s,\n\t\t\tsubjects: [%s],',eletivas,i,curriculo.eletivas(i).creditos,restriction,lista);
            eletivas = sprintf('%s\n\t\t},',eletivas);
        end
        eletivas = sprintf('%s\n\t},\n\n',eletivas);
    else
        eletivas = sprintf('\teletivas: {\n\t},\n\n');
    end

    
    %% Disciplinas detalhadas
    subjects = sprintf('\tsubjects: {');
    for i=1:length(curriculo.disciplinas)
        discipstr=disciplina2json(curriculo.disciplinas(i));
        subjects = sprintf('%s\n\t%s,',subjects,discipstr);
    end
    subjects(end)=[]; % remove virgula a mais

    curriculostr = sprintf('%s%s%s\n\t}\n};\n\nexport default catalogue;',curriculostr,eletivas,subjects);
end