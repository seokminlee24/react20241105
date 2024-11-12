import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp64(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub3/부천");
        }}
      >
        경로 데이터 address
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub3/서울");
        }}
      >
        경로 데이터 address
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.get("/api/main4/sub2/777");
        }}
      >
        경로 데이터 number
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.get("/api/main4/sub2/9000");
        }}
      >
        경로 데이터 number
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/kim");
        }}
      >
        경로 데이터(path valuable)
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/son");
        }}
      >
        경로 데이터(path valuable)
      </Button>
    </div>
  );
}

export default MyApp64;
