%slCharacterEncoding('UTF-8');
load('disciplinas.mat');
catlist = sprintf('catalogos = {');
for ano=2012:2020
    catlist = sprintf('%s\n\t''%d'': {',catlist,ano);
    create(['js/ano' num2str(ano)]);
    for i=[1:200]
        try
            curriculos = getcurriculo(['https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo' num2str(ano) '/proposta/sug' num2str(i) '.html'],disciplinas{ano});

            catlist = sprintf('%s\n\t\t''%s'': {',catlist,curriculos.curso);

            for j=1:length(curriculos.modalidade)
                catlist = sprintf('%s\n\t\t\t''%s'': {\n\t\t\t\tarquivo: ''ano%d/curso%d_mod%d''\n\t\t\t},',catlist,curriculos.modalidade(j).nome,ano,i,j);
                fid = fopen(['js/ano' num2str(ano) '/curso' num2str(i) '_mod' num2str(j) '.js'],'w');
                curriculostr = curriculo2str(curriculos.modalidade(j));
                fprintf(fid,'%s\n',curriculostr);
                fclose(fid);
            end
            catlist(end)=[];
            catlist = sprintf('%s\n\t\t},',catlist);

        catch error
            disp(error.message);
            disp(['Nao ha curso ' num2str(i)]);
        end
    end
    catlist(end)=[];
    catlist = sprintf('%s\n\t},',catlist);

end
catlist(end)=[];

catlist = sprintf('%s\n}',catlist);

fid = fopen('todos_catalogos.js','w');
fprintf(fid,'%s\n',catlist);
fclose(fid);