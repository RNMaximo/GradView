import React from 'react';

import CurveTo from "react-curveto";
import {hexToRgbA} from "../../../Functions/Colors/rgbMeanColor";

class PrerequisiteLine extends React.Component {

  /* Rerender caso a página mude de tamanho */
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render () {
    const subject = this.props.subject;
    const requisite = this.props.requisite;


    const lineOpacity = subject.opacity ? subject.opacity/2 : 1;
    let color = "#000000";
    if (this.props.coloredBy==="Random" && subject.color && subject.color !== "#ffffff") {
      color = subject.color;
    } else if (this.props.coloredBy==="Random") {

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