import React, { useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../../components/ui/button.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      { index: true, element: <div>HOME PAGE</div> },
      { path: "sub1", element: <div>add</div> },
      { path: "sub2", element: <div>view</div> },
    ],
  },
]);

function WholePage() {
  const [add, setAdd] = useState(0);
  const navigate = useNavigate("");

  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Button onClick={() => navigate("/")}>HOME</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/sub1")}>sub1</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/sub2")}>sub2</Button>
          </Box>
          <Box>
            <Button onClick={() => setAdd(add + 1)}>{add}</Button>
          </Box>
        </Flex>
      </Box>
      <hr />
      <Outlet />
    </Box>
  );
}

function App72(props) {
  return <RouterProvider router={router} />;
}

export default App72;
