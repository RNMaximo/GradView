number=10;
colors = getcolors(number);
for i=1:number
    rectangle('Position',[5*i,2,5,10],'FaceColor',colors(i,:));
    rectangle('Position',[5*i,12,5,10],'FaceColor',0.2+0.8*colors(i,:));
end