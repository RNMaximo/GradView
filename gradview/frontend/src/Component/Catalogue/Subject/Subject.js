import React from 'react';

import './Subject.css';

class Subject extends React.Component {
  render() {
    const subject = this.props.subject;
    const opacity = this.props.opacity;

    return (
      <div
        className={"subject " + subject.code}
        style={{
          backgroundColor: subject.color,
          opacity: opacity
        }}
        onMouseEnter
      >
        {subject.code}
      </div>

    )
  }
}

export default Subject;