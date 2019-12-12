function [lines2,semestres2] = randpermlines(lines,semestres,rounds)
% O objetivo eh permutar as disciplinas nos semestres de forma a minimizar
% o emeranhamento das linhas que representam os pre-requisitos.
    lengthlines = totallength(lines,semestres);
    lines2 = lines;
    semestres2=semestres;
    
    %     
    for cicle=1:round(rounds/10)
        lines3 = lines2;
        semestres3=semestres2;
        
        indsem=randi(length(semestres3));
        inds = randperm(length(semestres3{indsem}));
        for i=1:length(lines3)
            if lines3{i}(2,1)==indsem
                lines3{i}(2,2) = inds(lines3{i}(2,2));
            end
            if lines3{i}(1,1)==indsem
                lines3{i}(1,2) = inds(lines3{i}(1,2));
            end
        end
        semestres3{indsem}(inds) = semestres3{indsem};
        
        leghtlines2=totallength(lines3,semestres3);

        if leghtlines2<=lengthlines
            lengthlines=leghtlines2;
            lines2=lines3;
            semestres2=semestres3;
        end
    end
    
    
    for cicle=1:rounds
        lines3 = lines2;
        semestres3=semestres2;
        
        indsems = randperm(length(semestres3));

        for indsem=indsems(1:randi(length(semestres3)))
            inds = randperm(length(semestres3{indsem}));
            for i=1:length(lines3)
                if lines3{i}(2,1)==indsem
                    lines3{i}(2,2) = inds(lines3{i}(2,2));
                end
                if lines3{i}(1,1)==indsem
                    lines3{i}(1,2) = inds(lines3{i}(1,2));
                end
            end
            semestres3{indsem}(inds) = semestres3{indsem};
        end
        
        leghtlines2=totallength(lines3,semestres3);

        if leghtlines2<=lengthlines
            lengthlines=leghtlines2;
            lines2=lines3;
            semestres2=semestres3;
        end
    end
    
    for cicle=1:round(rounds/10)
        lines3 = lines2;
        semestres3=semestres2;
        
        indsem=randi(length(semestres3));
        inds = randperm(length(semestres3{indsem}));
        for i=1:length(lines3)
            if lines3{i}(2,1)==indsem
                lines3{i}(2,2) = inds(lines3{i}(2,2));
            end
            if lines3{i}(1,1)==indsem
                lines3{i}(1,2) = inds(lines3{i}(1,2));
            end
        end
        semestres3{indsem}(inds) = semestres3{indsem};
        
        leghtlines2=totallength(lines3,semestres3);

        if leghtlines2<=lengthlines
            lengthlines=leghtlines2;
            lines2=lines3;
            semestres2=semestres3;
        end
    end
