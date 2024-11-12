import React from "react";
import axios from "axios";
import { Button } from "../components/ui/button.jsx";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub7", [
            {
              title: "son",
              author: 30,
              content: "내용",
              price: 1000,
              quantity: 1,
            },
            {
              title: "lee",
              author: 25,
              content: "내용",
              price: 2000,
              quantity: 2,
            },
            {
              title: "line",
              author: 30,
              content: "내용",
              price: 3000,
              quantity: 3,
            },
          ]);
        }}
      >
        btn7
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/api/main2/sub6", [
            { name: "son", age: 30 },
            { name: "han", age: 35 },
            { name: "faker", age: 25 },
          ]);
        }}
      >
        btn6
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/api/main2/sub5", ["coffee", "milk", "mocha"]);
        }}
      >
        btn5
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/api/main2/sub4", {
            id: 1,
            name: "lee",
            available: true,
            shops: ["g마켓", "11번가", "쿠팡"],
            attribute: {
              name: "제조회사",
              value: "엔디비아",
            },
          });
        }}
      >
        btn4
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/api/main2/sub3", {
            name: "son",
            age: 99,
            married: true,
            item: ["coffee", "milk", "cola"],
            team: {
              name: "토트넘",
              location: "런던",
            },
          });
        }}
      >
        btn3
      </Button>
      <hr />
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
