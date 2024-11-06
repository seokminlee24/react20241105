import React from "react";

function MyApp24(props) {
  return (
    <div>
      <Box color="yellow" bg="black" text="대통령은 누굴까?" />
      <hr />
    </div>
  );
}

function Box(color, bg, text) {
  return <div style={{ color: color, backgroundColor: bg }}></div>;
}
export default MyApp24;
