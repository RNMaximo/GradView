function plotlinhas(linhas)

    figure
    hold on
    for i=1:length(linhas)
        line(linhas{i}(:,2),-linhas{i}(:,1));
    end
    hold off