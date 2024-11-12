import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp63(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub8", {
            data: {
              gameTitle: " 드래곤 에이지: 더 베일가드",
              production: "바이오웨어",
              description:
                "다크 판타지와 맞지 않은 그래픽, 그리고 강제주입 그것이 다 말아먹음",
            },
          });
        }}
      >
        delete
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.put("/api/main3/sub7", {
            gameTitle: " 스토커 2: 초르노빌의 심장부",
            production: " GSC Game World",
          });
        }}
      >
        put(w/ json)
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub6", {
            data: {
              id: 5,
              name: "kim",
            },
          });
        }}
      >
        delete (w/ json)
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub5");
        }}
      >
        delete1
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.put("/api/main3/sub4", { title: "제목", author: "한강" });
        }}
      >
        put (w/ json)
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.put("/api/main3/sub3");
        }}
      >
        put1
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/api/main3/sub2", { name: "son", age: 99 });
        }}
      >
        post1
      </Button>
      <hr />
      <Button onClick={() => axios.get("/api/main3/sub1")}>get1</Button>
    </div>
  );
}

export default MyApp63;
