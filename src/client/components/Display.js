import React from "react";

const Display = props => {
  console.log(props);
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};
export default Display;
