function creditos = getcredits(tudo,codigo)
    if strncmp(codigo,'ELET',3)
        creditos = str2double(codigo(5:end));
        return;
    end
    ind = strcmp({tudo(:).codigo},codigo);
    if sum(ind)==0
        error(['A disciplina ' codigo ' não foi encontrada']);
    end
    creditos = tudo(ind).creditos;