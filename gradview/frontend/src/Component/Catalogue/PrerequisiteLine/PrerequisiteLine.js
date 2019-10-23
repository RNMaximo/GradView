import React from 'react';

import CurveTo from "react-curveto";
import {hexToRgbA} from "../../../Functions/Colors/rgbMeanColor";
import * as Constants from '../constants';

class PrerequisiteLine extends React.Component {

  state = {
    visible: true
  }
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
    const defaultOpacity = (fromS.opacity + toS.opacity)/4;
    let lineOpacity = 1/2;
    if (this.props.opacity) {
      lineOpacity = this.props.opacity
    } else if (defaultOpacity) {
      console.log(defaultOpacity)
      lineOpacity = defaultOpacity
    }
    let color = "#000000";
    if (this.props.coloredBy==="Random" && fromS.color && fromS.color !== "#ffffff") {
      color = fromS.color;
    }
    if (! this.state.visible) {
      color = Constants.invisibleColor;
    }
    if (this.props.editing) {
      lineOpacity = 0
    }
    const opacity = this.state.visible ? lineOpacity : Constants.invisibleOpacity/2;

    return (
      <CurveTo
        key={fromS.code+"_to_"+toS.code+"CT"}
        ref={n => this.curveTo = n}
        style={{opacity: opacity}}
        from={fromS.code}
        to={toS.code}
        borderColor={hexToRgbA(color, opacity)}
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