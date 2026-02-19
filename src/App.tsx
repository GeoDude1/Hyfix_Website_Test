import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HyfixMainPage } from "./screens/HyfixMainPage";
import { HyfixMainPageScreen } from "./screens/HyfixMainPageScreen";
import { HyfixMainPageWrapper } from "./screens/HyfixMainPageWrapper/HyfixMainPageWrapper";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/home" replace />,
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
    // Legacy paths – redirect to clean URLs so the address bar shows /home, /about, /applications
    {
      path: "/hyfixu95mainu95page-1-white-application",
      element: <Navigate to="/applications" replace />,
    },
    {
      path: "/hyfixu95mainu95page-1-white-homeu95v2",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/hyfixu95mainu95page-1-white-about",
      element: <Navigate to="/about" replace />,
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") }
);

export const App = () => {
  return <RouterProvider router={router} />;
};
