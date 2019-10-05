import React from 'react';

import CurveTo from "react-curveto";
import {hexToRgbA} from "../../../Functions/Colors/rgbMeanColor";

class PrerequisiteLine extends React.Component {
  render () {
    const subject = this.props.subject;
    const requisite = this.props.requisite;


    let lineOpacity = 1;
    if (subject.opacity) {
      lineOpacity = subject.opacity/2;
    }
    return (
      <CurveTo
        style={{opacity: subject.opacity}}
        from={subject.name}
        to={requisite}
        borderColor={hexToRgbA(subject.color, lineOpacity * 0.8)}
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