import React from 'react';

import CurveTo from "react-curveto";
import {hexToRgbA} from "../../../Functions/Colors/rgbMeanColor";
import * as Constants from '../constants';

class PrerequisiteLine extends React.Component {
  state = {
    onHover: false
  };

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
    const fromS = this.props.from;
    const toS = this.props.to;

    if (!fromS || !toS) return null;
    // Média da opacidade das duas disciplinas
    let lineOpacity = 1;
    if (this.props.editing) {
      lineOpacity = 0
    } else if (! this.state.onHover) {
      lineOpacity = Constants.invisibleOpacity/2
    } else if (this.props.opacity) {
      lineOpacity = this.props.opacity
    }

    let color = "#000000";
    if (! this.state.onHover) {
      color = Constants.invisibleColor;
    } else if (this.props.coloredBy==="Random" && fromS.color && fromS.color !== "#ffffff") {
      color = fromS.color;
    }

    return (
      <CurveTo
        key={fromS.code+"_to_"+toS.code+"CT"}
        ref={n => this.curveTo = n}
        style={{opacity: lineOpacity}}
        from={fromS.code}
        to={toS.code}
        borderColor={hexToRgbA(color, lineOpacity)}
        borderWidth={3}
        zIndex={-10}
        toAnchor="bottom"
        fromAnchor="top"
        curveFrom={[0, 0]}
        curveTo={[0, 5]}
        delay={50}
      />
    )
  }

}

export default PrerequisiteLine;