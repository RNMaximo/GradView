function curriculos = minimal_lines(curriculos)
% O objetivo eh permutar as disciplinas nos semestres de forma a minimizar
% o emeranhamento das linhas que representam os pre-requisitos.
    linhas = getlines(curriculos);
    
    for i=1:length(linhas)
        semestres = curriculos.modalidade(i).semestre;
        [linhas{i},semestres] = randpermlines(linhas{i},semestres,round(10*totallength(linhas{i},semestres)));
        curriculos.modalidade(i).semestre = semestres;
    end