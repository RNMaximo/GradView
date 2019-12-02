function curriculo_cores = colore_curriculos(curriculo)
    curriculo_cores = curriculo;
    for i=1:length(curriculo.modalidade)
        ncores = 0;
        discs=curriculo.modalidade(i).disciplinas;
        for j=1:length(discs)
            if isempty(discs(j).prereqs)
                ncores = ncores+1;
            else
                if ~isempty(strfind(discs(j).prereqs{1},'AA'))
                    ncores = ncores+1;
                end
            end

        end
        
        cores = getcolors(ncores);
        cores = cores(randperm(ncores),:);
        
        cores = round(255*cores);
        
        ncores = 0;
        for j=1:length(discs)
            discs(j).color='';
            if isempty(discs(j).prereqs)
                ncores = ncores+1;
                discs(j).color = rgb2hex(cores(ncores,:));
            else
                if ~isempty(strfind(discs(j).prereqs{1},'AA'))
                    ncores = ncores+1;
                    discs(j).color = rgb2hex(cores(ncores,:));
                end
            end
        end
        
        curriculo_cores.modalidade(i).disciplinas = discs;
    end