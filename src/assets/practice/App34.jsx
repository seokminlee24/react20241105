import React from "react";
import { Box, HStack } from "@chakra-ui/react";

function App34(props) {
  return (
    <div>
      <HStack h={20}>
        <Box
          h={20}
          bg={"orange"}
          onClick={(e) => console.log(e.target.innerText)}
        >
          Lorem ipsum dolor.
        </Box>
        <Box
          h={20}
          bg={"blue"}
          onClick={(e) => {
            console.log(e.target.innerHTML);
          }}
        >
          adipisicing elit. Ab?
        </Box>
        <Box
          onClick={(e) => console.log(e.target.innerText)}
          h={20}
          bg={"teal"}
        >
          adipisicing elit. Aliquam.
        </Box>
      </HStack>
    </div>
  );
}

export default App34;
