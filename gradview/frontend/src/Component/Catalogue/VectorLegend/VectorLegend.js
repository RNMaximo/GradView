import React from 'react';
import * as colorConstans from "../colorConstants";
import Legend from "../../../UI/Legend/Legend";

import './VectorLegends.css'

class VectorLegend extends React.Component {
  render() {
    const legends = colorConstans.legendColors.map((legend) => {
      return <Legend key={legend.name} color={legend.color} text={legend.name} />
    });

    return (
      <div className={'vectorLegend'}>
        {legends}
      </div>
    )
  }
}

export default VectorLegend;