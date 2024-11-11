import React, { useState } from "react";
import { Field } from "../../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";
import {
  NumberInputField,
  NumberInputRoot,
} from "../../components/ui/number-input.jsx";
import { Button } from "../../components/ui/button.jsx";
import axios from "axios";

function App60(props) {
  const [price, setPrice] = useState(1000);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleClick = () => {
    axios.post("/api/main1/sub4", {
      title: title,
      content: content,
      price: price,
    });
  };
  return (
    <div>
      <Field label={"제목"}>
        <Input onChange={(e) => setTitle(e.target.value)} value={title} />
      </Field>
      <Field label={"내용"}>
        <Textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </Field>
      <Field label={"가격"}>
        <NumberInputRoot value={price} onValueChange={(e) => setPrice(e.value)}>
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleClick}>전송</Button>
    </div>
  );
}

export default App60;
