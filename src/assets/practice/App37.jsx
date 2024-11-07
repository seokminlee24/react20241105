import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App37(props) {
  const [text, setText] = useState("");
  function handText(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <Input onKeyUp={handText} />
      <p>{text}</p>
    </div>
  );
}

export default App37;
