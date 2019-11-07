function curriculo = getcurriculo(url,todas_disciplinas)

    slCharacterEncoding('UTF-8');
    dados = webread(url,'ContentType','text/html','CharacterEncoding','auto');
    dados=htmlEntities('entities.mat',dados,0);
    dados=strsplit(dados,'<div class=''div100''>');
    dados=dados{2};
    dados=strsplit(dados,'<h2>Observa��o</h2>');
    dados=dados{1};
    dados=strsplit(dados,'<h2>');
    dados=dados{2};
    dados=strsplit(dados,'</h2>');
    curso=dados{1};
    dados=dados{2};

    dados=strsplit(dados,'<h1>');
    clear mod modalidade curriculo sugestao
    if length(dados)==1
        curriculo.modalidade(1).nome=[];
        clear disciplinasusadas
        inddisc=1;
        blocos_semestre=strsplit(dados{1},'Semestre :');
        for j=2:length(blocos_semestre)
            semestre_sugerido=[];
            cred_semestre = str2double(strtok(blocos_semestre{j},' '));
            disciplinas = strsplit(blocos_semestre{j},'<a href=''../coordenadorias/');
            for k=2:length(disciplinas)
                discparts=split(disciplinas{k},[">","("]);
                semestre_sugerido{k-1}=strrep(discparts{2},' ','_');
            end

            discparts=split(disciplinas{1},["<br/>"," cr"]);

            if length(discparts)>2
                semestre_sugerido{end+1}=['ELET' discparts{2}];
            end

            % Cross check se os creditos das disciplinas estao ok com o semestre.
            creditos_sum=0;
            for ind=1:length(semestre_sugerido)
                creditos_sum=creditos_sum+getcredits(todas_disciplinas,semestre_sugerido{ind});
                disciplinasusadas{inddisc}=getdisciplina(todas_disciplinas,semestre_sugerido{ind});
                inddisc = inddisc+1;
            end
            if cred_semestre ~= creditos_sum
                error('Os creditos dos semestres n�o bateram com os creditos das disciplinas indicadas.');
            end

            curriculo.modalidade(1).semestre{j-1}=semestre_sugerido;
        end
        curriculo.modalidade(1).disciplinas=horzcat(disciplinasusadas{:});
    else
        for i=2:length(dados)

            blocos_semestre=strsplit(dados{i},'Semestre :');
            nome=strsplit(blocos_semestre{1},'</h1>');
            curriculo.modalidade(i-1).nome=nome{1};
            clear disciplinasusadas
            inddisc=1;
            for j=2:length(blocos_semestre)
                semestre_sugerido=[];
                cred_semestre = str2double(strtok(blocos_semestre{j},' '));
                disciplinas = strsplit(blocos_semestre{j},'<a href=''../coordenadorias/');
                for k=2:length(disciplinas)
                    discparts=split(disciplinas{k},[">","("]);
                    semestre_sugerido{k-1}=strrep(discparts{2},' ','_');
                end

                discparts=split(disciplinas{1},["<br/>"," cr"]);

                if length(discparts)>2
                    semestre_sugerido{end+1}=['ELET' discparts{2}];
                end

                % Cross check se os creditos das disciplinas estao ok com o semestre.
                creditos_sum=0;
                for ind=1:length(semestre_sugerido)
                    creditos_sum=creditos_sum+getcredits(todas_disciplinas,semestre_sugerido{ind});
                    disciplinasusadas{inddisc}=getdisciplina(todas_disciplinas,semestre_sugerido{ind});
                    inddisc = inddisc+1;
                end
                if cred_semestre ~= creditos_sum
                    error('Os creditos dos semestres n�o bateram com os creditos das disciplinas indicadas.');
                end

                curriculo.modalidade(i-1).semestre{j-1}=semestre_sugerido;
            end
            curriculo.modalidade(i-1).disciplinas=horzcat(disciplinasusadas{:});
        end
    end