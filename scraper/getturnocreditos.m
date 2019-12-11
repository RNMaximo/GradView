function [turno,creditos] = getturnocreditos(ano,curso)

url = ['https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo' num2str(ano) '/cursos/cur' num2str(curso) '.html'];
dados = webread(url,'ContentType','text/html','CharacterEncoding','utf-8');
dados=htmlEntities('entities.mat',dados,0);

dados=strsplit(dados,'Turno : ');
turno = strsplit(dados{2},'</h2>');
turno = turno{1};

creditos = strsplit(dados{2},'<h2>Limite de Cr');
creditos = strsplit(creditos{2},'ximo de');
if contains(creditos{1},'o tem')
    creditos = 1000000000;
else
    creditos = strsplit(creditos{2},'cr');
    creditos = str2num(creditos{1});
end