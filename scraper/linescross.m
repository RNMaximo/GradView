function docross = linescross(p1,q1,p2,q2)
    % Checa se as linhas cruzam. Mas se forem colineares ou o ponto final
    % de uma terminar sobre a outra, da um peso menor.
    % https://www.geeksforgeeks.org/check-if-two-given-line-segments-intersect/
    
    o1=orientation(p1,q1,p2);
    o2=orientation(p1,q1,q2);
    o3=orientation(p2,q2,p1);
    o4=orientation(p2,q2,q1);
    
    % Caso geral
    if o1~=o2 && o3~=o4
        docross=1;
        return;
    end
    
    % Casos especiais
    if o1==0 && onsegment(p1,p2,q1)
        docross=0.2;
        return;
    end
    
    if o2==0 && onsegment(p1,q2,q1)
        docross=0.2;
        return;
    end
    
    if o3==0 && onsegment(p2,p1,q2)
        docross=0.2;
        return;
    end
    
    if o4==0 && onsegment(p2,q1,q2)
        docross=0.2;
        return;
    end
    
    docross=0;
end

function o = orientation(p,q,r)
    val = (q(1)-p(1))*(r(2)-q(2))-(q(2)-p(2))*(r(1)-q(1));
    
    % Colinear
    if val==0
        o=0;
        return;
    end
    
    % Horario ou anti-horario
    if val>0
        o=1;
    else
        o=2;
    end
end

function s = onsegment(p,q,r)
    if (q(2) <= max(p(2),r(2))) && (q(2) >= min(p(2),r(2))) && (q(1) <= max(p(1),r(1))) && (q(1) >= min(p(1),r(1)))
        s = 1;
    else
        s = 0;
    end
end