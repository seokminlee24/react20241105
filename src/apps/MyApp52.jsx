import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import { Switch } from "../components/ui/switch.jsx";

// 컴포넌트의 lifecycle
// initial render (mount)
// re-render (update)
//unmount

function MyApp52(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Switch
        checked={show}
        onCheckedChange={(e) => setShow(e.checked)}
      ></Switch>
      {show && <MyComp1 />}
    </div>
  );
}

function MyComp1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Box>
        <Button onClick={() => setCount(count + 1)}>count : {count}</Button>
      </Box>
    </div>
  );
}

export default MyApp52;
