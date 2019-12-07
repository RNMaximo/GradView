function [lines,semestres] = randpermlines(lines,semestres)
    lengthlines = totallength(lines);
    lines2 = lines;
    semestres2=semestres;
    
    indsem = randi(length(semestres2));
    inds = randperm(length(semestres2{indsem}));
    for i=1:length(lines2)
        if lines2{i}(2,1)==indsem
            lines2{i}(2,2) = inds(lines2{i}(2,2));
        end
        if lines2{i}(1,1)==indsem
            lines2{i}(1,2) = inds(lines2{i}(1,2));
        end
    end
    semestres2{indsem}(inds) = semestres2{indsem};
    
    indsem = randi(length(semestres2));
    inds = randperm(length(semestres2{indsem}));
    for i=1:length(lines2)
        if lines2{i}(2,1)==indsem
            lines2{i}(2,2) = inds(lines2{i}(2,2));
        end
        if lines2{i}(1,1)==indsem
            lines2{i}(1,2) = inds(lines2{i}(1,2));
        end
    end
    semestres2{indsem}(inds) = semestres2{indsem};
    
    indsem = randi(length(semestres2));
    inds = randperm(length(semestres2{indsem}));
    for i=1:length(lines2)
        if lines2{i}(2,1)==indsem
            lines2{i}(2,2) = inds(lines2{i}(2,2));
        end
        if lines2{i}(1,1)==indsem
            lines2{i}(1,2) = inds(lines2{i}(1,2));
        end
    end
    semestres2{indsem}(inds) = semestres2{indsem};
    
    
    
    if totallength(lines2)<=lengthlines
        lines=lines2;
        semestres=semestres2;
    end