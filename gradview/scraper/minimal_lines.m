function curriculos = minimal_lines(curriculos)

    linhas = getlines(curriculos);
    
    for i=1:length(linhas)
        semestres = curriculos.modalidade(i).semestre;
        for j=1:100000
            [linhas{i},semestres] = randpermlines(linhas{i},semestres);
        end
        curriculos.modalidade(i).semestre = semestres;
    end