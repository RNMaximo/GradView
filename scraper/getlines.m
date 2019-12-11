function linhas = getlines(curriculo)

    for i=1:length(curriculo.modalidade)
        indline=0;
        sem=curriculo.modalidade(i).semestre;
        discs=curriculo.modalidade(i).disciplinas;
        codigosusadas={curriculo.modalidade(i).disciplinas(:)};
        
        for j=1:length(sem)
            for k=1:length(sem{j})
                disc = getdisciplina(discs,sem{j}{k},codigosusadas,k);
                for l=1:length(sem)
                    for m=1:length(sem{l})
                        if ~isempty(disc.prereqs)
                            if contains(disc.prereqs{1},sem{l}{m})
                                indline = indline+1;
                                linhas{i}{indline}=[l m;j k];
                                %linhas{i}{indline}=[l m-0.5*(length(sem{l})-1);j k-0.5*(length(sem{j})-1)];
                            end
                        end
                    end
                end
            end
        end
    end