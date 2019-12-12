function colors = getcolors(number)
% Utiliza a roda de cores do Matlab pra gerar N cores distintas
    colors=hsv(number);
    
    peso = 0.45;
    cinza = 0.5;
    colors = (peso*colors+(1-peso)*cinza*[1 1 1]);