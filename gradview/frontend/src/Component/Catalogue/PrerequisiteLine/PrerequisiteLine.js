import React from 'react';

import CurveTo from "react-curveto";
import {hexToRgbA} from "../../../Functions/Colors/rgbMeanColor";

class PrerequisiteLine extends React.Component {
  render () {
    const subject = this.props.subject;
    const requisite = this.props.requisite;


    const lineOpacity = subject.opacity ? subject.opacity/2 : 1;
    let color = "#000000";
    if (subject.color && subject.color !== "#ffffff") {
      color = subject.color;
    }
    const opacity = subject.opacity ? subject.opacity : 1;

    return (
      <CurveTo
        style={{opacity: opacity}}
        from={subject.code}
        to={requisite}
        borderColor={hexToRgbA(color, lineOpacity)}
        borderWidth={3}
        zIndex={-10}
        toAnchor="bottom"
        fromAnchor="top"
        curveFrom={[0, 0]}
        curveTo={[0, 5]}
      />
    )
  }

}

export default PrerequisiteLine;