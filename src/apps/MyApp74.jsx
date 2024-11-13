import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: (
          <div>
            <HomeContent />
          </div>
        ),
      },
      {
        path: "sub1",
        element: (
          <div>
            <SubContent1 />
          </div>
        ),
      },
      {
        path: "sub2",
        element: (
          <div>
            <SubContent2 />
          </div>
        ),
      },
    ],
  },
]);

function Navbar() {
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
        </Flex>
      </Box>
    </Box>
  );
}

function HomeContent() {
  const location = useLocation();

  // react-router location 객체
  console.log(location);
  // browser 의 router location 객체
  console.log(window.location);
  return <Box>홈 페이지 컨텐츠</Box>;
}

function SubContent1() {
  const location = useLocation();
  console.log(location);
  console.log(window.location);
  return <Box>서브 페이지 @@@@</Box>;
}

function SubContent2() {
  const location = useLocation();
  console.log(location);
  console.log(window.location);
  return <Box>서브 페이지 !!!!!!!!</Box>;
}

function RootPage() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}

function MyApp74(props) {
  return <RouterProvider router={router} />;
}

export default MyApp74;
