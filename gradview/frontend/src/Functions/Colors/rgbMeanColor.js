function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {r: 0, g: 0, b: 0};
}

function hexToRgbA(hex, opacity){
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    c= hex.substring(1).split('');
    if(c.length===3){
      c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c= '0x'+c.join('');
    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+opacity+')';
  }
}


const rgbMeanColor = (colors) => {
  let r = 0
  let g = 0
  let b = 0
  colors.forEach((color) =>  {
    r = r + hexToRgb(color).r
    g = g + hexToRgb(color).g
    b = b + hexToRgb(color).b
  });
  r = parseInt(r/colors.length)
  g = parseInt(g/colors.length)
  b = parseInt(b/colors.length)
  /*
  const r = (hexToRgb(colorA).r + hexToRgb(colorB).r)/2
  const g = (hexToRgb(colorA).g + hexToRgb(colorB).g)/2
  const b = (hexToRgb(colorA).b + hexToRgb(colorB).b)/2

   */
  const colorC = rgbToHex(r, g, b)
  return colorC
};


export default rgbMeanColor;
export {rgbMeanColor, hexToRgbA};