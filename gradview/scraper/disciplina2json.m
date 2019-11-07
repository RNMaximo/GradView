function json = disciplina2json(disciplina)
    c=disciplina.codigo;
    n=disciplina.nome;
    e=disciplina.ementa;
    v=disciplina.vetor;
    p=disciplina.prereqs{1};
    if isempty(e)
        e='[]';
    end
    json = sprintf('\t''%s'': {\n\t\t\tcode: ''%s'',\n\t\t\tname: ''%s'',\n\t\t\tementa: ''%s'',\n\t\t\tsemestre: 1,\n\t\t\tvector: {%s},\n\t\t\trequisitos: %s\n\t\t}',c,c,n,e,v,p);
end