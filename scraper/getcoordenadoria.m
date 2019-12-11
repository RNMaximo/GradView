function coordenadoria = getcoordenadoria(url)

slCharacterEncoding('UTF-8');
dados = webread(url,'ContentType','text/html','CharacterEncoding','auto');
dados=htmlEntities('entities.mat',dados,0);

dados = split(dados,["<h1>","</h1>"]);
coordenadoria = dados{2};