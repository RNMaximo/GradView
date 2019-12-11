number=10;
colors = getcolors(number);
for i=1:number
    rectangle('Position',[5*i,12,5,10],'FaceColor',colors(i,:));
end