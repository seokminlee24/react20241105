import React from "react";

function App19(props) {
  return (
    <div>
      <MyComp title={"채식주의자"} content={"비건"} author={"한강"} />
      <MyComp title={"채식주의자"} content={"비건"} />
      <MyComp title={"채식주의자"} author={"한강"} />
      <MyComp content={"비건"} author={"한강"} />
    </div>
  );
}

function MyComp({ title = "무제", content = "냉무", author = "무명" }) {
  return (
    <div>
      <h3>App19</h3>
      <li>{title}</li>
      <li>{content}</li>
      <li>{author}</li>
    </div>
  );
}
export default App19;
