function curriculostr = curriculo2str(curriculo)
    curriculostr = sprintf('const catalogue = {\n\ttotalCredits: %d,\n\tsemesters: {',curriculo.creditos);
    for i=1:length(curriculo.semestre)
        %curriculostr = [curriculostr '''sem-' num2str(i) ''': {id: ''' num2str(i) ''', subjects: ' '[''' strjoin(curriculo.semestre{i},''', ''') ''']}, '];
        semstr=strjoin(curriculo.semestre{i},''', ''');
        curriculostr = sprintf('%s\n\t\t''sem-%d'': {\n\t\t\tid: ''%d'',\n\t\t\tsubjects: [''%s'']\n\t\t},',curriculostr,i,i,semstr);
    end
    curriculostr(end)=[]; % remove virgula a mais
    curriculostr = sprintf('%s\n\t},\n\n',curriculostr);
    
    subjects = sprintf('\tsubjects: {');
    for i=1:length(curriculo.disciplinas)
        discipstr=disciplina2json(curriculo.disciplinas(i));
        subjects = sprintf('%s\n\t%s,',subjects,discipstr);
    end
    subjects(end)=[]; % remove virgula a mais

    curriculostr = sprintf('%s%s\n\t}\n};\n\nexport default catalogue;',curriculostr,subjects);
end