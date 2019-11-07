function disciplina = getdisciplina(tudo,codigo)
    if strncmp(codigo,'ELET',3)
        disciplina.codigo=codigo;
        disciplina.nome='Eletiva';
        disciplina.ementa='';
        disciplina.vetor=['T:' codigo(5:end) ', P:0, L:0, O:0, D:0, HS:0, SL:0, C:' codigo(5:end)];
        disciplina.prereqs={''};
        disciplina.oferecimento='';
        disciplina.creditos=str2double(codigo(5:end));
        disciplina.coordenadoria='';
        return;
    end
    ind = strcmp({tudo(:).codigo},codigo);
    disciplina = tudo(ind);