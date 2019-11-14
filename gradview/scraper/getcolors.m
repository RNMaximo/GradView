function colors = getcolors(number)
    colors=hsv(number);

    colors = colors*0.6+0.25;
    colors(colors>1)=1;
    colors(colors<0)=0;