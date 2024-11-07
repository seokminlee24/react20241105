import React, { useState } from "react";

import { Box, Button } from "@chakra-ui/react";

function App39(props) {
  const [number, setNumber] = useState(1);
  let handleButtonClick = () => {
    setNumber((number % 3) + 1);
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>{number}</Button>
      {/*<Box display={number === 1 ? "block" : "none"} h={20} bg={"blue.300"}>
        1
      </Box>*/}
      {number === 1 && (
        <Box h={20} bg={"blue.300"}>
          1
        </Box>
      )}
      {number === 2 && (
        <Box h={20} bg={"red.300"}>
          2
        </Box>
      )}
      {number === 3 && (
        <Box h={20} bg={"yellow.300"}>
          3
        </Box>
      )}
    </div>
  );
}

export default App39;
