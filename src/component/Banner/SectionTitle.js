import React from "react";

const SectionTitle = (props) => {
  // console.log(props);
  let { tCenter, stitle, btitle } = props;
  return (
    <div className={`section_title ${tCenter}`}>
      <h6>{stitle}</h6>
      <h2>{btitle}</h2>
    </div>
  );
};

export default SectionTitle;
