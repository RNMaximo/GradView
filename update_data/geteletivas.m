function eletivas_enfase = geteletivas(ano,curso)
% Faz scraping dos blocos de eletivas de um curso/modalidade
url = ['https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo' num2str(ano) '/curriculoPleno/cp' num2str(curso) '.html'];
dados = webread(url,'ContentType','text/html','CharacterEncoding','utf-8');
dados=htmlEntities('entities.mat',dados,0);

dadosparts=split(dados,["\n<h1>","</h1>"]);
cursostr = strsplit(dadosparts{2},' - ');cursostr=cursostr{2};

dadosparts=split(dadosparts{end},["<p><strong>","</strong></p>"]);
dadosparts=split(dadosparts{end},"<br><strong>");
for i=1:length(dadosparts)
    enfaseparts = split(dadosparts{i},"<strong>Disciplinas Eletivas</strong><br>");
    enfase = split(enfaseparts{1},"</strong><br>");
    if(length(enfaseparts)==1)||length(enfase)==1
        enfase = '';
    else
        enfase = split(enfaseparts{1},"</strong><br>");enfase = enfase{1};
    end
    
    eletivas_enfase(i).enfase = enfase;
    for j=2:length(enfaseparts)
        credparts = strsplit(enfaseparts{j},[char(10) '<br>']);
        
        cont=1;
        for k=1:length(credparts)
            bloco = strsplit(credparts{k},' cr');
            
            if length(bloco)>1
                bloco{1}=strrep(bloco{1},'<br>','');
                eletivas_enfase(i).blocos(cont).creditos = str2num(bloco{1});
                disc = regexp(bloco{2},'>[a-zA-Z][ a-zA-Z][\d-][\d-][\d-]<','match');
                for l=1:length(disc)
                    disc{l}(1)=[];
                    disc{l}(end)=[];
                end
                disc = strrep(disc,' ','_');
                eletivas_enfase(i).blocos(cont).disc=disc;
                cont = cont+1;
            end
        end
    end
end

% Adicionando eletivas do conjunto comum em cada enfase separadamente
if length(eletivas_enfase)>1
    for i=2:length(eletivas_enfase)
        for j=1:length(eletivas_enfase(1).blocos)
            eletivas_enfase(i).blocos(end+1).creditos = eletivas_enfase(1).blocos(j).creditos;
            eletivas_enfase(i).blocos(end).disc = eletivas_enfase(1).blocos(j).disc;
        end
    end
    eletivas_enfase(1)=[];
end