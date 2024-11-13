import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // /page3 으로 이동했을 때 어떤 컴포넌트 출력
// /page3 으로 이동했을 때 어떤 컴포넌트 출력
// /page4 으로 이동했을 때 어떤 컴포넌트 출력
// /page1/sub1 으로 이동했을 때 어떤 컴포넌트 출력
// /page1/sub2 으로 이동했을 때 어떤 컴포넌트 출력
const router = createBrowserRouter([
  { path: "/", element: <div>여기는 홈페이지</div> },
  {
    path: "/path1",
    element: (
      <div>
        여기는 1번 경로
        <hr />
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        /*path: ""*/ element: <div>여기는 경로1의 홈페이지</div>,
      },
      {
        path: "sub1",
        element: <div>여기는 경로1/서브1</div>,
      },
      {
        path: "sub2",
        element: <div>여기는 경로1/서브2</div>,
      },
    ],
  },
  //{ path: "/path1/sub1", element: <div>여기는 1-1번 경로</div> },
  //{ path: "/path1/sub2", element: <div>여기는 1-2번 경로</div> },
  { path: "/path2", element: <div>여기는 2번 경로</div> },
  {
    path: "/path3",
    element: (
      <div>
        여기는 3번 경로
        <hr />
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <div>여기는 경로3의 홈페이지</div> },
      { path: "sub1", element: <div>여기는 경로3/서브1</div> },
      { path: "sub2", element: <div>여기는 경로3/서브2</div> },
    ],
  },
  { path: "/path4", element: <div>여기는 4번 경로</div> },
]);

function MyApp71(props) {
  return <RouterProvider router={router} />;
}

export default MyApp71;
