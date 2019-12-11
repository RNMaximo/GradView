function disciplina = getdisciplina(tudo,codigo,discusadas,semestre)
    if strncmp(codigo,'ELET',3)
        disciplina.codigo=['ELET' num2str(semestre,'%02d')];
        disciplina.nome='Eletiva';
        disciplina.ementa='Eletivas sao creditos de escolha do aluno. O aluno deve escolher as disciplinas eletivas dentro de conjuntos pre-definidos ou, em alguns casos, dentre quaisquer disciplinas da Unicamp.';
        disciplina.vetor=['T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:' num2str(str2num(codigo(5:end)))];
        disciplina.prereqs={};
        disciplina.oferecimento='';
        disciplina.creditos=str2double(codigo(5:end));
        disciplina.coordenadoria='';
        return;
    end
    if strncmp(codigo,'-----',5)
        disciplina.codigo='-----';
        disciplina.nome='Qualquer Disciplina da Unicamp';
        disciplina.ementa='Esta disciplina representa qualquer disciplina oferecida pela Unicamp.';
        disciplina.vetor='T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1';
        disciplina.prereqs={};
        disciplina.oferecimento='';
        disciplina.creditos=1;
        disciplina.coordenadoria='';
        return;
    end
    if contains(codigo,'-')
        disciplina.codigo=codigo;
        disciplina.nome=['Qualquer Disciplina com codigo ' codigo];
        disciplina.ementa=['Esta disciplina representa qualquer disciplina oferecida pela Unicamp com codigo ' codigo ', onde o - indica uma letra ou numero.'];
        disciplina.vetor='T:0, P:0, L:0, O:0, D:0, HS:0, SL:0, C:1';
        disciplina.prereqs={};
        disciplina.oferecimento='';
        disciplina.creditos=1;
        disciplina.coordenadoria='';
        return;
    end
    ind = strcmp({tudo(:).codigo},codigo);
    disciplina = tudo(ind);
    
    %% Checa conjuntos de prereqs
    % Checa cada conjunto de prereqs, se sao totalmente satisfeitos pelas
    % disciplinas ja inclusas no curso
    prereqsOK=false(1,length(disciplina.prereqs));
    nprereqs=zeros(1,length(disciplina.prereqs));
    for i=1:length(disciplina.prereqs)
        foundinds=0;
        prereqsstr = strrep(strrep(strrep(strrep(disciplina.prereqs{i},'[',''),']',''),'''',''),'*','');
        prereqs = strsplit(prereqsstr,', ');
        prereqs(contains(prereqs,'AA'))=[];
        
        for j=1:length(discusadas)
            for k=1:length(discusadas{j})
                if sum(contains(prereqs,discusadas{j}(k).codigo))>0
                    foundinds=foundinds+1;
                    %disp('');
                    %disp(['Conjunto: ' num2str(i) ' Pai: ' disciplina.codigo '  ' discusadas{j}(k).codigo ' encontrada em ' prereqsstr]);
                end
            end
        end
        nprereqs(i)=length(prereqs);
        if(foundinds==length(prereqs))
            prereqsOK(i)=1;
        end
    end        
    
    indsok=find(prereqsOK);
    [~,indmin]=min(nprereqs(prereqsOK));
    disciplina.prereqs = disciplina.prereqs(indsok(indmin));