function curriculos = minimal_lines(curriculos)

    linhas = getlines(curriculos);
    
    for i=1:length(linhas)
        semestres = curriculos.modalidade(i).semestre;
        [linhas{i},semestres] = randpermlines(linhas{i},semestres,round(500*totallength(linhas{i},semestres)));
        curriculos.modalidade(i).semestre = semestres;
    end