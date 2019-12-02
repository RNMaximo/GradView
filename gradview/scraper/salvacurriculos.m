slCharacterEncoding('UTF-8');
load('disciplinas.mat');
catlist = sprintf('const catalogueOptions = {');
for ano=2013:2013
    catlist = sprintf('%s\n\t"%d": {',catlist,ano);
    create(['js/' num2str(ano)]);
    for i=[1:50]
        disp(['Obtendo curso ' num2str(i)]);
        try
            curriculos = getcurriculo(ano,i,disciplinas{ano});
            
            curriculos = colore_curriculos(curriculos);
            
            curso = strsplit(curriculos.curso,' - ');
            curso = strjoin(curso(2:end),' - ');
            catlist = sprintf('%s\n\t\t''%d'': {\n\t\t\tname: "%s",\n\t\t\tmodality: [\n',catlist,i,curso);
            
            for j=1:length(curriculos.modalidade)
                filename = [num2str(ano) '/curso' num2str(i) '_mod' num2str(j) '.js'];
                catlist = sprintf('%s\t\t\t\t{\n\t\t\t\t\tname: ''%s'',\n\t\t\t\t\tfile: ''%s''\n\t\t\t\t},\n',catlist,curriculos.modalidade(j).nome,filename);
                fid = fopen(['js/' filename],'w');
                curriculostr = curriculo2str(curriculos.modalidade(j));
                curriculostr=strrep(curriculostr,'\\','\');
                fprintf(fid,'%s\n',curriculostr);
                fclose(fid);
            end
            catlist = sprintf('%s\t\t\t]\n\t\t},',catlist);

        catch error
            disp(error.message);
            disp(['Nao ha curso ' num2str(i)]);
        end
    end
    catlist(end)=[];
    catlist = sprintf('%s\n\t},',catlist);

end
catlist(end)=[];

catlist = sprintf('%s\n};\nexport default catalogueOptions;',catlist);

fid = fopen('todos_catalogos.js','w');
fprintf(fid,'%s\n',catlist);
fclose(fid);