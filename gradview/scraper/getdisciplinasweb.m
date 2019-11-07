function disciplinas = getdisciplinasweb(url)
    data = webread(url,'ContentType','text/html','CharacterEncoding','auto');
    datas = strsplit(htmlEntities('entities.mat',data,0),'<div class="ancora">')';
    
    url=strrep(url,'//','@');
    urlparts = strsplit(url,'/');
    urlparts(end-1)=[];
    coordenadoria = getcoordenadoria(strrep(strjoin(urlparts,'/'),'@','//'));
    
    disciplinas(length(datas)-2).codigo = '';
    disciplinas(length(datas)-2).nome = '';
    disciplinas(length(datas)-2).vetor = '';
    disciplinas(length(datas)-2).prereqs = '';
    disciplinas(length(datas)-2).ementa = '';
    for i=3:length(datas)
        line = datas{i};
        line=strrep(line,'<p><strong>','');
        line=strrep(line,'<br>','');
        line=strrep(line,'<br/>','');
        line=strrep(line,'<br />','');
        line=strrep(line,newline,'');
        line=strrep(line,char(13),'');
        line=strrep(line,'<p>','');
        line=strrep(line,'<p style="text-align:justify">','');
        line=strrep(line,'<p style="text-align: justify;">','');
        line=strrep(line,'<span style="color:rgb(34, 34, 34)">','');
        line=strrep(line,'</p>','');
        line=strrep(line,'<span style="color:black">','');
        line=strrep(line,'</span>','');
        linetmp=strrep(line,'  ',' ');
        while(~strcmp(linetmp,line))
            line=linetmp;
            linetmp=strrep(line,'  ',' ');
        end
        lineparts=split(line,["<a name=""",""">","</a>","<p>","</p>","<strong>","</strong>","<div","</div>"]);
        disciplinas(i-2).codigo=strrep(strtrim(lineparts{2}),' ','_');
        nameparts=strsplit(lineparts{3},' - ');
        disciplinas(i-2).nome=strtrim(strjoin(nameparts(2:end),' - '));
        vetor=strsplit(strtrim(lineparts{5}),' ');
        oferecimento = strsplit(vetor{1},':');
        disciplinas(i-2).oferecimento = oferecimento{2};
        disciplinas(i-2).vetor=strrep(strrep(strjoin(vetor(2:9),', '),':0',':'),':0',':');
        disciplinas(i-2).creditos=str2num(vetor{9}(3:end));
        % Para levar em conta mais dados das disciplinas utilizar aqui vetor{n}
        disciplinas(i-2).prereqs=strsplit(strtrim(lineparts{7}),'/ ');
        
        for j=1:length(disciplinas(i-2).prereqs)
            if ~isempty(disciplinas(i-2).prereqs{j})
                for letra='A':'Z'
                    if ~isempty(strfind(disciplinas(i-2).prereqs{j},letra))
                        disciplinas(i-2).prereqs{j} = strrep(disciplinas(i-2).prereqs{j},[letra ' '],[letra '_']);
                    end
                end
                disciplinas(i-2).prereqs{j} = ['[''' strrep(disciplinas(i-2).prereqs{j},' ',''', ''') ''']'];
            else
                disciplinas(i-2).prereqs{j}='''''';
            end
        end
        disciplinas(i-2).ementa=strtrim(lineparts{11});
        disciplinas(i-2).coordenadoria=coordenadoria;
    end
end