import React from "react";
import axios from "axios";
import { Button } from "../components/ui/button.jsx";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub2", {
            title: "채식주의자",
            author: "한강",
            content: "채식",
            price: 1000,
            quantity: 3,
          });
        }}
      >
        btn2
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/api/main2/sub1", { name: "son", age: 99 });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp62;
