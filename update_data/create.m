function create(folder)
% Se uma pasta ainda nao existe, cria. Cria todas as subpastas no caminho.
    if exist(folder, 'dir') ~= 7
        disp(['Creating folder ' folder]);
        mkdir(folder);
    end