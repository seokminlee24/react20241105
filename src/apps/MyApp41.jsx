import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function MyApp41(props) {
  const [person, setPerson] = useState({ name: "", address: "" });

  const handleNameInputKeyUp = (e) => {
    const newPerson = { ...person, name: e.target.value };
    //person.name = e.target.value;
    console.log(person);
    setPerson(newPerson);
  };

  const handleAddressInputKeyUp = (e) => {
    const nextPerson = { ...person, address: e.target.value };
    //person.address = e.target.value;
    console.log(person);
    setPerson(nextPerson);
  };

  return (
    <div>
      <Field label={"이름"}>
        <Input onKeyUp={handleNameInputKeyUp} />
      </Field>
      <Field label={"주소"}>
        <Input onKeyUp={handleAddressInputKeyUp} />
      </Field>

      <hr />
      <ul>
        <li>이름: {person.name}</li>
        <li>주소: {person.address}</li>
      </ul>
    </div>
  );
}

export default MyApp41;
