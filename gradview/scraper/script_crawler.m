slCharacterEncoding('UTF-8');


for i=0:200
    try
        conjuntos{i} = getdisciplinasweb(['https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2020/coordenadorias/' num2str(i,'%04d') '/' num2str(i,'%04d') '.html']);
    catch
        disp(['Não há ' num2str(i,'%04d')]);
    end
end

tudo = horzcat(conjuntos{:});
% 
% fid = fopen('disciplinas.txt','w');
% for i=1:length(tudo)
%     fprintf(fid,'%s\n\n',disciplina2json(tudo(i)));
% end
% fclose(fid);