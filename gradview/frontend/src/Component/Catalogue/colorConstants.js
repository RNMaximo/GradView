export const TColor = "rgb(40,91,143)";
export const PColor = "rgb(130,20,130)";
export const LColor = "rgb(200,30,130)";
export const OColor = "rgb(60,150,110)";
export const DColor = "rgb(50,200,200)";
export const RestColor = "rgb(50,50,50)";

export const legendColors =
  [
    {
    name: 'Teórica',
    color: TColor
  },{
    name: 'Prática',
    color: PColor
  },{
    name: 'Laboratório',
    color: LColor
  },{
    name: 'Orientada',
    color: OColor
  },{
    name: 'À distância',
    color: DColor
  },{
    name: 'Eletiva',
    color: RestColor
  }
  ];

export const getLinearGradColors = (vector) => {
  const TPercent = vector.T/vector.C*100;
  const PPercent = TPercent + vector.P/vector.C*100;
  const LPercent = PPercent + vector.L/vector.C*100;
  const OPercent = LPercent + vector.O/vector.C*100;
  const DPercent = OPercent + vector.D/vector.C*100;

  const T = TColor +", " + TColor+" "+TPercent +"%, ";
  const P = PColor +" "+ TPercent +"%, " + PColor +", " + PColor +" "+ PPercent +"%, ";
  const L = LColor +" "+ PPercent +"%, " + LColor +", " + LColor +" "+ LPercent +"%, ";
  const O = OColor +" "+ LPercent +"%, " + OColor +", " + OColor +" "+ OPercent +"%, ";
  const D = DColor +" "+ OPercent +"%, " + DColor +", " + DColor +" "+ DPercent +"%, ";
  const Rest = RestColor + DPercent +"%, " + RestColor;
  const linearGradColors = T + P + L + O + D + Rest;
  return linearGradColors;
};