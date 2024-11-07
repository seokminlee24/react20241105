import React from "react";
import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import * as PropTypes from "prop-types";

function MyBox({ color }) {
  return (
    <>
      <Box
        w={{
          base: "100%",
          md: "3/6",
          lg: "1/3",
        }}
        style={{ height: "80px", backgroundColor: color }}
      ></Box>
    </>
  );
}

MyBox.propTypes = { color: PropTypes.string };

function MyApp32(props) {
  return (
    <div>
      <h5>컴포넌트 배치</h5>
      <HStack>
        <Box border={"5px solid black"} w="1/3">
          가
        </Box>
        <Box border={"5px solid black"} w="1/3">
          나
        </Box>
        <Box border={"5px solid black"} w="1/3">
          다
        </Box>
      </HStack>
      <hr />
      <Stack direction={{ base: "column", md: "row" }}>
        <Box h={20} bg={"orange"}>
          A
        </Box>
        <Box h={20} bg={"skyblue"}>
          B
        </Box>
        <Box h={20} bg={"gray"}>
          C
        </Box>
      </Stack>
      <hr />
      <Flex warp={"wrap"}>
        <MyBox color={"orange"} />
        <MyBox color={"skyblue"} />
        <MyBox color={"gray"} />
      </Flex>
      <hr />
      <Flex warp={"wrap"}>
        <Box
          w={{
            base: "100%",
            md: "3/6",
            lg: "1/3",
          }}
          style={{ height: "80px", backgroundColor: "orange" }}
        >
          1
        </Box>
        <Box
          w={{
            base: "100%",
            md: "3/6",
            lg: "1/3",
          }}
          style={{ height: "80px", backgroundColor: "skyblue" }}
        >
          2
        </Box>
        <Box
          w={{
            base: "100%",
            md: "3/6",
            lg: "1/3",
          }}
          style={{ height: "80px", backgroundColor: "gray" }}
        >
          3
        </Box>
      </Flex>
      <hr />
      <Flex justify={"space-between"}>
        <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "skyblue" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "gray" }}>3</div>
      </Flex>
      <hr />
      <div style={{ display: "flex" }}>
        <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "skyblue" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "gray" }}>3</div>
      </div>
      <hr />
      <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
      <div style={{ height: "80px", backgroundColor: "skyblue" }}>2</div>
      <div style={{ height: "80px", backgroundColor: "gray" }}>3</div>
    </div>
  );
}

export default MyApp32;
