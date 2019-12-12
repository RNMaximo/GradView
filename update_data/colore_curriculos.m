function curriculo_cores = colore_curriculos(curriculo)
% A partir das disciplinas de um curriculo e identificando se possuem ou
% nao pre-requisitos, faz a atribuicao de cores para as disciplinas de base
% e faz a combinacao das cores para disciplinas descendentes.
    curriculo_cores = curriculo;
    for i=1:length(curriculo.modalidade)
        % Conta quantas cores novas deve usar
        ncores = 0;
        discs=curriculo.modalidade(i).disciplinas;
        for j=1:length(discs)
            if contains(discs(j).codigo,'ELET')
                % NAO FAZ NADA
            elseif isempty(discs(j).prereqs)
                ncores = ncores+1;
            elseif (length(strfind(discs(j).prereqs{1},'AA'))==length(strfind(discs(j).prereqs{1},','))+1)
                ncores = ncores+1;
            end
        end
        
        cores = getcolors(ncores);
        cores = cores(randperm(ncores),:);
        
        cores = round(255*cores);
        
        % Aplica essas cores às disciplinas sem pré-requisitos
        ncores = 0;
        for j=1:length(discs)
            discs(j).color='';
            if contains(discs(j).codigo,'ELET')
                discs(j).color = [0 0 0];
            elseif isempty(discs(j).prereqs)
                ncores = ncores+1;
                discs(j).color = cores(ncores,:);
            elseif (length(strfind(discs(j).prereqs{1},'AA'))==length(strfind(discs(j).prereqs{1},','))+1)
                ncores = ncores+1;
                discs(j).color = cores(ncores,:);
            end
        end
        
        % Todas disciplinas sem prereq coloridas ate aqui.
        % Iterativamente colore as disciplinas que estão sem cores, com
        % base nos pré-reqs
        
        if isempty(discs)
            curriculo_cores.modalidade(i).disciplinas = discs;
            return;
        end
        codigos = {discs(:).codigo};
        
        modificado=true;
        while modificado
            modificado=false;
            for j=1:length(discs)
                if isempty(discs(j).color)
                    prereqs = strrep(strrep(strrep(strrep(strrep(discs(j).prereqs,'''',''),'[',''),']',''),'*',''),' ','');
                    prereqs = strsplit(prereqs{1},',');
                    nvalid=0;
                    nok=0;
                    cor=[0 0 0];
                    for k=1:length(prereqs)
                        if isempty(strfind(prereqs{k},'AA'))
                            nvalid=nvalid+1;
                            ind=strcmp(codigos,prereqs{k});
                            
                            corpre = discs(ind).color;
                            if ~isempty(corpre)
                                nok=nok+1;
                                cor = cor+corpre;
                            end
                        end
                    end
                    
                    if nvalid==nok
                        discs(j).color=round(cor/nok);
                        modificado=true;
                    end
                end
            end
        end
        
        for j=1:length(discs)
            discs(j).color = rgb2hex(discs(j).color);
        end
        
        
        curriculo_cores.modalidade(i).disciplinas = discs;
    end