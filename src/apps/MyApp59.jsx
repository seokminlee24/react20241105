import React from "react";
import axios from "axios";
import { Button } from "../components/ui/button.jsx";

function MyApp59(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/hi", {
            name: "손흥민",
            city: "서울",
          });
        }}
      >
        btn4
      </Button>
      <hr />
      <Button
        onClick={() => {
          const d = new FormData();
          d.append("name", "son");
          d.append("address", "서울");

          axios.post("/hi", d);
        }}
      >
        btn3
      </Button>
      <hr />
      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.append("name", "son");
          p.append("address", "런던");

          axios.post("/hi", p);
        }}
      >
        btn2
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/hi", "somedata");
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp59;
