linhas = getlines(curriculos);

lines = linhas{1};
semestres = curriculos.modalidade(1).semestre;

plotlinhas(lines,semestres);
totallength(lines,semestres)
tic
[lines,semestres] = randpermlines(lines,semestres,15500);
toc
totallength(lines,semestres)
plotlinhas(lines,semestres);