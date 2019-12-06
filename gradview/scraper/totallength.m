function linelength = totallength(linhas)
    linelength=0;
    
    % linhas diagonais
    for i=1:length(linhas)
        linelength = linelength + abs(linhas{i}(2,2)-linhas{i}(1,2));
    end
    
    % linhas cruzadas
%     for i=1:length(linhas)
%         for j=1:length(linhas)
%             if (linhas{i}(1,2)<linhas{j}(2,2))&&(linhas{j}(1,2)<linhas{i}(2,2))&&(linhas{j}(1,1)>linhas{i}(1,1))&&(linhas{j}(2,1)<linhas{i}(2,1))
%                 linelength = linelength + 2;
%             end
%         end
%     end