function creditos = getcredits(tudo,codigo)
% Procura a disciplina codigo na lista de disciplinas e retorna o numero de
% creditos
    if strncmp(codigo,'ELET',3)
        creditos = str2double(codigo(5:end));
        return;
    end
    ind = strcmp({tudo(:).codigo},codigo);
    if sum(ind)==0
        error(['A disciplina ' codigo ' não foi encontrada']);
    end
    creditos = tudo(ind).creditos;