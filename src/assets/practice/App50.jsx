import React, { createContext, useContext, useState } from "react";
import { Field } from "../../components/ui/field.jsx";
import { Box, Input } from "@chakra-ui/react";

function MyBox2() {
  const user = useContext(UserContext);

  return (
    <Box>
      <p>이름 : {user.name}</p>
      <p>이메일 : {user.email}</p>
    </Box>
  );
}
function MyBox1() {
  return <MyBox2 />;
}

const UserContext = createContext("");
function App50(props) {
  const [user, setUser] = useState({ name: "", email: "" });
  return (
    <div>
      <Field label={"이름"}>
        <Input onChange={(e) => setUser({ ...user, name: e.target.value })} />
      </Field>
      <Field label={"이메일"}>
        <Input onChange={(e) => setUser({ ...user, email: e.target.value })} />
      </Field>
      <UserContext.Provider value={user}>
        <MyBox1 />
      </UserContext.Provider>
    </div>
  );
}

export default App50;
