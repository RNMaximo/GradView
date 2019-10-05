import React from 'react';

import './Subject.css';

class Subject extends React.Component {
  render() {
    const subject = this.props.subject;
    const opacity = this.props.opacity;

    return (
      <div
        className={"subject " + subject.name}
        style={{
          backgroundColor: "white",
          opacity: "1"
        }}
      >
        {subject.name}
      </div>

    )
  }
}

export default Subject;