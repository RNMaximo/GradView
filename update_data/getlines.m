function linhas = getlines(curriculo)
% Para cada modalidade de um curso, cria um vetor de "linhas" que
% representam a ligacao entre cada par de disciplinas em cadeia. Cada
% celula do vetor eh uma linha "elem", onde elem(:,1) eh o no de partida e
% elem(:,2) eh o no de chegada da linha. A coordenada x represena o
% semestre e a coordenada y representa a posicao no semestre.
% O objetivo eh permutar as disciplinas nos semestres de forma a minimizar
% o emeranhamento das linhas que representam os pre-requisitos.
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
                            end
                        end
                    end
                end
            end
        end
    end