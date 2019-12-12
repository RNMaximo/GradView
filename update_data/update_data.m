% Este script faz o scraping de todas as paginas de cursos da DAC-UNICAMP
% obtendo informacoes sobre os curriculos, disciplinas, eletivas e
% coordenadorias
% Opcoes
anoinicial = 2012; % Nao funciona antes de 2012
anofinal = 2020; % Nao testado alem de 2020
cursoinicial = 1; % Matematica
cursofinal = 200; % ProFIS

%%
basefolder='../gradview/frontend/';
slCharacterEncoding('UTF-8');
catlist = sprintf('const catalogueOptions = {');
for ano=anoinicial:anofinal
    disp(['== ANO ' num2str(ano,'%04d') ' ==']);
    conjuntos={};
    for i=1:200
        disp(['Obtendo disciplinas da coordenadoria ' num2str(i,'%04d')]);
        try
            conjuntos{i} = getdisciplinasweb(['https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo' num2str(ano) '/coordenadorias/' num2str(i,'%04d') '/' num2str(i,'%04d') '.html']);
        catch
            disp(['Nao ha coordenadoria ' num2str(i,'%04d')]);
        end
    end

    disciplinas{ano} = horzcat(conjuntos{:});
    
    catlist = sprintf('%s\n\t"%d": {',catlist,ano);
    create([basefolder 'public/catalogues/' num2str(ano)]);
    for i=[cursoinicial:cursofinal]
        disp(['Obtendo curso ' num2str(i)]);
        try
            curriculos = getcurriculo(ano,i,disciplinas{ano});
            
            curriculos = colore_curriculos(curriculos);
            
            curriculos = minimal_lines(curriculos);
            
            curso = strsplit(curriculos.curso,' - ');
            curso = strjoin(curso(2:end),' - ');
            catlist = sprintf('%s\n\t\t''%d'': {\n\t\t\tname: "%s - %s",\n\t\t\tmodality: [\n',catlist,i,curso,curriculos.modalidade(1).turno);
            
            for j=1:length(curriculos.modalidade)
                filename = [num2str(ano) '/curso' num2str(i) '_mod' num2str(j) '.js'];
                catlist = sprintf('%s\t\t\t\t{\n\t\t\t\t\tname: ''%s'',\n\t\t\t\t\tfile: ''%s''\n\t\t\t\t},\n',catlist,curriculos.modalidade(j).nome,filename);
                fid = fopen([basefolder 'public/catalogues/' filename],'w');
                curriculostr = curriculo2str(curriculos.modalidade(j));
                curriculostr=strrep(curriculostr,'\\','\');
                fprintf(fid,'%s\n',curriculostr);
                fclose(fid);
            end
            catlist = sprintf('%s\t\t\t]\n\t\t},',catlist);

        catch ME
            errorMessage = sprintf('Error in function %s() at line %d.\nError Message:\n%s', ...
            ME.stack(1).name, ME.stack(1).line, ME.message);
            fprintf(2, '%s\n', errorMessage);
        end
    end
    catlist(end)=[];
    catlist = sprintf('%s\n\t},',catlist);

end
catlist(end)=[];

catlist = sprintf('%s\n};\nexport default catalogueOptions;',catlist);

fid = fopen([basefolder 'src/Component/Catalogue/allCatalogues.js'],'w');
fprintf(fid,'%s\n',catlist);
fclose(fid);