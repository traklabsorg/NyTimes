import React, { Component } from "react";

class SectionTitle extends Component {
  render() {
    let { tCenter, stitle, btitle } = this.props;
    return (
      <div className={`section_title ${tCenter}`}>
        <h6>{stitle}</h6>
        <h2>{btitle}</h2>
      </div>
    );
  }
}

export default SectionTitle;
