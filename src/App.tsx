import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HyfixMainPage } from "./screens/HyfixMainPage";
import { HyfixMainPageScreen } from "./screens/HyfixMainPageScreen";
import { HyfixMainPageWrapper } from "./screens/HyfixMainPageWrapper/HyfixMainPageWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HyfixMainPageScreen />,
  },
  {
    path: "/*",
    element: <HyfixMainPageScreen />,
  },
  {
    path: "/hyfixu95mainu95page-1-white-application",
    element: <HyfixMainPage />,
  },
  {
    path: "/hyfixu95mainu95page-1-white-homeu95v2",
    element: <HyfixMainPageScreen />,
  },
  {
    path: "/hyfixu95mainu95page-1-white-about",
    element: <HyfixMainPageWrapper />,
  },
]);

export const App = () => {
  return (
    <>
      <div className="page-backdrop" aria-hidden="true" />
      <RouterProvider router={router} />
    </>
  );
};
