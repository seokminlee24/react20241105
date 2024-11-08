import React, { useState } from "react";
import { Field } from "../../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";

function App41(props) {
  const [book, setBook] = useState({ title: "", content: "" });
  let handleTitleInputKeyUp = (e) => {
    const newBook = { ...book, title: e.target.value };
    console.log(book.title);
    setBook(newBook);
  };

  let handleContentInputKeyUp = (e) => {
    const nextBook = { ...book, content: e.target.value };
    console.log(book.content);
    setBook(nextBook);
  };
  return (
    <div>
      <Field label={"제목"}>
        <Input onKeyUp={(e) => setBook({ ...book, title: e.target.value })} />
      </Field>
      <Field label={"본문"}>
        <Textarea
          onKeyUp={(e) => setBook({ ...book, content: e.target.value })}
        />
      </Field>

      <hr />
      <ul>
        <li>제목: {book.title}</li>
        <li>본문: {book.content}</li>
      </ul>
    </div>
  );
}

export default App41;
