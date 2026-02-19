import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HyfixMainPage } from "./screens/HyfixMainPage";
import { HyfixMainPageScreen } from "./screens/HyfixMainPageScreen";
import { HyfixMainPageWrapper } from "./screens/HyfixMainPageWrapper/HyfixMainPageWrapper";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HyfixMainPageScreen />,
    },
    {
      path: "/home",
      element: <HyfixMainPageScreen />,
    },
    {
      path: "/about",
      element: <HyfixMainPageWrapper />,
    },
    {
      path: "/applications",
      element: <HyfixMainPage />,
    },
    {
      path: "/*",
      element: <HyfixMainPageScreen />,
    },
    // Legacy paths (redirects / backwards compatibility)
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
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") }
);

export const App = () => {
  return <RouterProvider router={router} />;
};
