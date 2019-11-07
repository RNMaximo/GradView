slCharacterEncoding('UTF-8');
dados = webread('https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2020/coordenadorias/0059.html','ContentType','text/html','CharacterEncoding','auto');
dados=htmlEntities('entities.mat',dados,0);

dados = split(dados{1},["<h1>","</h1>"]);