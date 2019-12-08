import React from 'react';
import * as colorConstants from "../../../Functions/Colors/catalogueColors";
import Legend from "../../../UI/Legend/Legend";

import './VectorLegends.css'

class VectorLegend extends React.Component {
  render() {
    const legends = colorConstants.legendColors.map((legend) => {
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