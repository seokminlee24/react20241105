import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Button, Input } from "@chakra-ui/react";

function MyApp42(props) {
  const [person, setPerson] = useState({ name: "홍길동", address: "서울" });
  const originPerson = { name: "홍길동", address: "서울" };

  return (
    <div>
      <Field lable={"이름"}>
        <Input
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
        />
      </Field>
      <Field lable={"주소"}>
        <Input
          onChange={(e) => setPerson({ ...person, address: e.target.value })}
          value={person.address}
        />
      </Field>
      <Button onClick={() => setPerson(originPerson)}>리셋</Button>
    </div>
  );
}

export default MyApp42;
