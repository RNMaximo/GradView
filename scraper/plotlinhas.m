function plotlinhas(lines,sem)
    
    linhas = lines;
    for i=1:length(linhas)
        linhas{i}(1,2)=linhas{i}(1,2)-0.5*(length(sem{linhas{i}(1,1)})-1);
        linhas{i}(2,2)=linhas{i}(2,2)-0.5*(length(sem{linhas{i}(2,1)})-1);
    end

    figure
    hold on
    for i=1:length(linhas)
        line(linhas{i}(:,2)+rand()/50,-linhas{i}(:,1));
    end
    hold off