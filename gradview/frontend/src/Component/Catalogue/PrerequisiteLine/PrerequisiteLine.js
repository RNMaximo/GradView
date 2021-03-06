import React from 'react';

import CurveTo from "../../../External Libs/react-curveto/src/index";
import {hexToRgbA} from "../../../Functions/Colors/rgbMeanColor";

import './PrerequisiteLine.css'
import {maxLineOpacity} from "../constants";

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

    const lineOpacity = maxLineOpacity;

    let color = "#000000";
    if (! this.props.coloredByVector && fromS.color && fromS.color !== "#ffffff") {
      color = toS.color;
    }


    const borderStyle = this.props.partial ? "dashed" : "solid";

    const visibleClass = !this.state.onHover ? " lessVisible " : "";
    const editingClass = this.props.editing ? " editing " : "";

    return (
      <CurveTo
        key={fromS.code+"_to_"+toS.code+"CT"}
        ref={n => this.curveTo = n}
        style={{opacity: lineOpacity}}
        className={"Line" + visibleClass + editingClass}
        from={fromS.code}
        to={toS.code}
        borderColor={hexToRgbA(color, lineOpacity)}
        borderWidth={3}
        zIndex={-10}
        toAnchor="bottom"
        fromAnchor="top"
        curveFrom={[0, 0]}
        curveTo={[0, 5]}
        delay={500}
        borderStyle={borderStyle}
      />
    )
  }

}

export default PrerequisiteLine;