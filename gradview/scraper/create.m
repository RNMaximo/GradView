function create(folder)
    if exist(folder, 'dir') ~= 7
        disp(['Creating folder ' folder]);
        mkdir(folder);
    end