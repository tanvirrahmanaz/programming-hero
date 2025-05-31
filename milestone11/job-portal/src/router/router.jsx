import {
  createBrowserRouter,
} from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        {
            index: true,
            element: <Home></Home>
        }
    ]
  },
]);



export default router;