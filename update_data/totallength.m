function linelength = totallength(lines, sem)
% Soma todas as linhas que descem "tortas", somando apenas a projecao y.
% O objetivo eh permutar as disciplinas nos semestres de forma a minimizar
% o emeranhamento das linhas que representam os pre-requisitos.
    linelength=0;
    
    linhas = lines;
    
    for i=1:length(linhas)
        linhas{i}(1,2)=linhas{i}(1,2)-0.5*(length(sem{linhas{i}(1,1)})-1);
        linhas{i}(2,2)=linhas{i}(2,2)-0.5*(length(sem{linhas{i}(2,1)})-1);
    end
    
    % linhas diagonais
    for i=1:length(linhas)
        linelength = linelength + abs(linhas{i}(2,2)-linhas{i}(1,2));
    end
    
    % linhas cruzadas
%     for i=1:length(linhas)
%         for j=(i+1):length(linhas)
%             linelength = linelength + 0.1*linescross(linhas{i}(1,:),linhas{i}(2,:),linhas{j}(1,:),linhas{j}(2,:));
%         end
%     end

    % linhas sobrepostas
%     for i=1:length(linhas)
%         for j=1:length(linhas)
%             if (linhas{i}(1,1)<=linhas{j}(1,1))&&(linhas{i}(2,1)>=linhas{j}(2,1))&&(abs(linhas{j}(1,2)-linhas{i}(1,2))==0)&&(abs(linhas{j}(2,2)-linhas{i}(2,2))==0)
%                 linelength = linelength + 2;
%             end
%         end
%     end