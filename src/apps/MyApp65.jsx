import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp65(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub4")
            .then((r) => r.data)
            .then((d) => {
              console.log(d);
              console.log(d.name);
              console.log(d.age);
            });
        }}
      >
        btn4
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub3")
            .then((response) => response.data)
            .then((date) => console.log(date));
        }}
      >
        btn3
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub1")
            .then((response) => response.data)
            .then((data) => console.log(data));
        }}
      >
        btn2
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main5/sub1").then((response) => {
            console.log(response);
            console.log(response.data);
          });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp65;
