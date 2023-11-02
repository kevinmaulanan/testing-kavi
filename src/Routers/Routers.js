import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Video from "../Pages/Video";
import Costume from "../Pages/ZetaCostume";
import VideoDetail from "../Pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/video",
    element: <Video />,
  },
  {
    path: "/video/:id",
    element: <VideoDetail />,
  },

  {
    path: "/costume",
    element: <Costume />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
