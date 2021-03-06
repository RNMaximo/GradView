function curriculo = getcurriculo(ano,curso,todas_disciplinas)
% Faz scraping da DAC recolhendo os curr�culos de cada uma das modalidades
% de um curso
    url = ['https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo' num2str(ano) '/proposta/sug' num2str(curso) '.html'];
    dados = webread(url,'ContentType','text/html','CharacterEncoding','auto');
    dados=htmlEntities('entities.mat',dados,0);
    dados=strsplit(dados,'<div class=''div100''>');
    dados=dados{2};
    dados=strsplit(dados,'<h2>Observa��o</h2>');
    dados=dados{1};
    dados=strsplit(dados,'<h2>');
    dados=dados{2};
    dados=strsplit(dados,'</h2>');
    dados=dados{2};
    
    dados=strsplit(dados,'<h1>');
    
    url = ['https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo' num2str(ano) '/cursos/cur' num2str(curso) '.html'];
    dados2 = webread(url,'ContentType','text/html','CharacterEncoding','auto');
    dados2=htmlEntities('entities.mat',dados2,0);
    dados2=strsplit(dados2,'<h1>');
    dados2=strsplit(dados2{2},'</h1>');
    curriculo.curso=dados2{1};
    
    clear mod modalidade sugestao
    % Obtendo eletivas
    eletivas_enfase = geteletivas(ano,curso);
    
    % Obtendo turno e m�ximos cr�ditos semestrais
    [turno,maxcreditos] = getturnocreditos(ano,curso);
    
    if length(dados)==1
        curriculo.modalidade(1).nome='';
        curriculo.modalidade(1).turno=turno;
        curriculo.modalidade(1).maxcreditossem=maxcreditos;
        disciplinasusadas=[];
        inddisc=1;
        blocos_semestre=strsplit(dados{1},'Semestre :');
        creditos = 0;
        for j=2:length(blocos_semestre)
            disc_sug_semestre=[];
            cred_semestre = str2double(strtok(blocos_semestre{j},' '));
            disciplinas = strsplit(blocos_semestre{j},'<a href=''../coordenadorias/');
            for k=2:length(disciplinas)
                discparts=split(disciplinas{k},[">","("]);
                disc_sug_semestre{k-1}=strrep(discparts{2},' ','_');
            end

            discparts=split(disciplinas{1},["<br/>","  , "," cr"]);
            
            if length(discparts)>2
                creds = discparts{2};
                if length(discparts)>4
                    creds = num2str(str2num(discparts{4})+str2num(creds));
                end
                disc_sug_semestre{end+1}=['ELET' creds];
            end

            % Cross check se os creditos das disciplinas estao ok com o semestre.
            creditos_sum=0;
            for ind=1:length(disc_sug_semestre)
                creditos_sum=creditos_sum+getcredits(todas_disciplinas,disc_sug_semestre{ind});
                disciplinasusadas{inddisc}=getdisciplina(todas_disciplinas,disc_sug_semestre{ind},disciplinasusadas,j-1);
                disciplinasusadas{inddisc}.obligatory='true';
                disc_sug_semestre{ind} = disciplinasusadas{inddisc}.codigo;
                inddisc = inddisc+1;
            end
            if cred_semestre ~= creditos_sum
                fprintf(2,'Os creditos dos semestres nao bateram com os creditos das disciplinas indicadas.\n');
                fprintf(2,[num2str(cred_semestre) ' (curriculo) vs ' num2str(creditos_sum) ' (somando creditos)\n']);
            end
            creditos = creditos+cred_semestre;

            curriculo.modalidade(1).semestre{j-1}=disc_sug_semestre;
        end
        curriculo.modalidade(1).creditos=creditos;
        
        % inclusao das eletivas
        if isfield(eletivas_enfase,'blocos')
            for j=1:length(eletivas_enfase)
                if(strncmp(curriculo.modalidade(1).nome,eletivas_enfase(j).enfase,3))
                    curriculo.modalidade(1).nome = eletivas_enfase(j).enfase; %VERIFICAR SE FUNCIONA BEM
                    curriculo.modalidade(1).eletivas=eletivas_enfase(j).blocos;

                    discelets = [];
                    for k=1:length(curriculo.modalidade(1).eletivas)
                        discelets = [discelets curriculo.modalidade(1).eletivas(k).disc];
                    end

                    discelets = unique(discelets);
                    for k=1:length(discelets)
                        disciplinasusadas{inddisc}=getdisciplina(todas_disciplinas,discelets{k},disciplinasusadas,0);
                        disciplinasusadas{inddisc}.obligatory='false';
                        inddisc=inddisc+1;
                    end
                    break;
                end
            end
        end
        if ~isempty(disciplinasusadas)
            curriculo.modalidade(1).disciplinas=horzcat(disciplinasusadas{:});
        else
            curriculo.modalidade(1).disciplinas={};
        end
    else
        for i=2:length(dados)
            creditos = 0;
            blocos_semestre=strsplit(dados{i},'Semestre :');
            nome=strsplit(blocos_semestre{1},'</h1>');
            curriculo.modalidade(i-1).nome=nome{1};
            curriculo.modalidade(i-1).turno=turno;
            curriculo.modalidade(i-1).maxcreditossem=maxcreditos;
            disciplinasusadas=[];
            inddisc=1;
            for j=2:length(blocos_semestre)
                disc_sug_semestre=[];
                cred_semestre = str2double(strtok(blocos_semestre{j},' '));
                disciplinas = strsplit(blocos_semestre{j},'<a href=''../coordenadorias/');
                for k=2:length(disciplinas)
                    discparts=split(disciplinas{k},[">","("]);
                    disc_sug_semestre{k-1}=strrep(discparts{2},' ','_');
                end

                discparts=split(disciplinas{1},["<br/>","  , "," cr"]);
                
                if length(discparts)>2
                    creds = discparts{2};
                    if length(discparts)>4
                        creds = num2str(str2num(discparts{4})+str2num(creds));
                    end
                    disc_sug_semestre{end+1}=['ELET' creds];
                end
                
                % Cross check se os creditos das disciplinas estao ok com o semestre.
                creditos_sum=0;
                for ind=1:length(disc_sug_semestre)
                    creditos_sum=creditos_sum+getcredits(todas_disciplinas,disc_sug_semestre{ind});
                    disciplinasusadas{inddisc}=getdisciplina(todas_disciplinas,disc_sug_semestre{ind},disciplinasusadas,j-1);
                    disciplinasusadas{inddisc}.obligatory='true';
                    disc_sug_semestre{ind} = disciplinasusadas{inddisc}.codigo;
                    inddisc = inddisc+1;
                end
                if cred_semestre ~= creditos_sum
                    fprintf(2,'Os creditos dos semestres nao bateram com os creditos das disciplinas indicadas.\n');
                    fprintf(2,[num2str(cred_semestre) ' (curriculo) vs ' num2str(creditos_sum) ' (somando creditos)\n']);
                end
                creditos = creditos+cred_semestre;

                curriculo.modalidade(i-1).semestre{j-1}=disc_sug_semestre;
            end
            curriculo.modalidade(i-1).creditos=creditos;
            
            % inclusao das eletivas
            if isfield(eletivas_enfase,'blocos')
                for j=1:length(eletivas_enfase)
                    if(strncmp(curriculo.modalidade(i-1).nome,eletivas_enfase(j).enfase,3))
                        curriculo.modalidade(i-1).nome = eletivas_enfase(j).enfase; %VERIFICAR SE FUNCIONA BEM
                        curriculo.modalidade(i-1).eletivas=eletivas_enfase(j).blocos;

                        discelets = [];
                        for k=1:length(curriculo.modalidade(i-1).eletivas)
                            discelets = [discelets curriculo.modalidade(i-1).eletivas(k).disc];
                        end

                        discelets = unique(discelets);
                        for k=1:length(discelets)
                            disciplinasusadas{inddisc}=getdisciplina(todas_disciplinas,discelets{k},disciplinasusadas,0);
                            disciplinasusadas{inddisc}.obligatory='false';
                            inddisc=inddisc+1;
                        end
                        break;
                    end
                end
                curriculo.modalidade(i-1).disciplinas=horzcat(disciplinasusadas{:});
            end
        end
    end