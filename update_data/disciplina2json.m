function json = disciplina2json(disciplina)
% Pega uma struct disciplina e converte em um trecho de codigo JSON
    c=disciplina.codigo;
    n=disciplina.nome;
    e=strrep(strrep(disciplina.ementa,'''','\'''),'"','\"');
    v=disciplina.vetor;
    if ~isempty(disciplina.prereqs)
        p=disciplina.prereqs{1};
    else
        p='''''';
    end
    if isempty(e)
        e='[]';
    end
    cor=['''' disciplina.color ''''];
    obligatory = disciplina.obligatory;
    json = sprintf('\t''%s'': {\n\t\t\tcode: ''%s'',\n\t\t\tname: ''%s'',\n\t\t\tementa: ''%s'',\n\t\t\tsemestre: 1,\n\t\t\tvector: {%s},\n\t\t\trequisitos: %s,\n\t\t\tcolor: %s,\n\t\t\tobligatory: %s\n\t\t}',c,c,n,e,v,p,cor,obligatory);
end