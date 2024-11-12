import React, { useState } from "react";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Field } from "../components/ui/field.jsx";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Box, Input } from "@chakra-ui/react";

function MyApp66(props) {
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState(null);

  const [supplierId, setSupplierId] = useState(0);
  const [supplier, setSupplier] = useState(null);

  const handleButtonClick = () => {
    axios
      .get(`/api/main6/sub1/${customerId}`)
      .then((res) => setCustomer(res.data));
  };

  const handleButtonClick2 = () => {
    axios
      .get(`/api/main6/sub2/${supplierId}`)
      .then((res) => setSupplier(res.data));
  };
  return (
    <div>
      <Field label={"공급자 번호"}>
        <NumberInputRoot
          value={supplierId}
          onValueChange={(e) => setSupplierId(e.value)}
        >
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleButtonClick2}>조회</Button>
      <hr />
      <SupplierView supplier={supplier} />
      <hr />
      <Field label={"고객번호"}>
        <NumberInputRoot
          value={customerId}
          onValueChange={(e) => setCustomerId(e.value)}
        >
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleButtonClick}>조회</Button>
      <hr />
      <CustomerView customer={customer} />
    </div>
  );
}
function SupplierView({ supplier }) {
  if (!supplier) {
    return (
      <Box>
        <p>조회된 공급자가 없습니다.</p>
      </Box>
    );
  }

  return (
    <Box>
      <Field label={"ID"} readOnly>
        <Input value={supplier.id} />
      </Field>
      <Field label={"공급자명"} readOnly>
        <Input value={supplier.name} />
      </Field>
      <Field label={"계약명"} readOnly>
        <Input value={supplier.contact} />
      </Field>
      <Field label={"주소"} readOnly>
        <Input value={supplier.address} />
      </Field>
      <Field label={"도시"} readOnly>
        <Input value={supplier.city} />
      </Field>
      <Field label={"우편번호"} readOnly>
        <Input value={supplier.postalCode} />
      </Field>
      <Field label={"국가"} readOnly>
        <Input value={supplier.country} />
      </Field>
      <Field label={"전화번호"} readOnly>
        <Input value={supplier.phone} />
      </Field>
    </Box>
  );
}

function CustomerView({ customer }) {
  if (!customer) {
    return (
      <Box>
        <p>조회된 고객이 없습니다.</p>
      </Box>
    );
  }

  return (
    <Box>
      <Field label={"ID"} readOnly>
        <Input value={customer.id} />
      </Field>
      <Field label={"이름"} readOnly>
        <Input value={customer.name} />
      </Field>
      <Field label={"계약명"} readOnly>
        <Input value={customer.contact} />
      </Field>
      <Field label={"주소"} readOnly>
        <Input value={customer.address} />
      </Field>
      <Field label={"도시"} readOnly>
        <Input value={customer.city} />
      </Field>
      <Field label={"우편번호"} readOnly>
        <Input value={customer.postalCode} />
      </Field>
      <Field label={"국가"} readOnly>
        <Input value={customer.country} />
      </Field>
    </Box>
  );
}

export default MyApp66;
