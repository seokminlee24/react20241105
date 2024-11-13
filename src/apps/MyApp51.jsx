import React, { createContext, useContext, useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Box, Input } from "@chakra-ui/react";

// 하나의 Context로 메시지와 업데이트 함수를 관리
const MessageContext = createContext("");

function MyBox2() {
  const { message } = useContext(MessageContext); // 메시지 값 가져오기
  return (
    <Box>
      <p>message: {message}</p>
    </Box>
  );
}

function MyForm2() {
  const { updateMessage } = useContext(MessageContext); // 메시지 업데이트 함수 가져오기

  return (
    <Field label={"메시지"}>
      <Input onChange={(e) => updateMessage(e.target.value)} />{" "}
      {/* 메시지 변경 */}
    </Field>
  );
}

function MyForm1() {
  return <MyForm2 />;
  {
    /* MyForm1은 MyForm2를 그대로 반환 */
  }
}

function MyBox1() {
  return <MyBox2 />;
  {
    /* MyBox1은 MyBox2를 그대로 반환 */
  }
}

function MyApp51(props) {
  const [message, setMessage] = useState("");

  // 메시지 업데이트 함수
  const updateMessage = (Message) => {
    setMessage(Message);
  };

  return (
    <div>
      {/* 하나의 Context로 메시지 값과 업데이트 함수 제공 */}
      <MessageContext.Provider value={{ message, updateMessage }}>
        <MyForm1 /> {/* MyForm1은 MyForm2를 사용 */}
        <MyBox1 /> {/* MyBox1은 MyBox2를 사용 */}
      </MessageContext.Provider>
    </div>
  );
}

export default MyApp51;
