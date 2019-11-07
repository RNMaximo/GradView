for i=1:200
    try
        curriculos = getcurriculo(['https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2020/proposta/sug' num2str(i) '.html'],tudo);

        for j=1:length(curriculos.modalidade)
            fid = fopen(['jsons/curso' num2str(i) '_mod' num2str(j) '.json'],'w');
            curriculostr = curriculo2str(curriculos.modalidade(j));
            fprintf(fid,'%s\n',curriculostr);
            fclose(fid);
        end
    catch
        disp(['Nao ha curso ' num2str(i)]);
    end
end