import {
  createBrowserRouter,
} from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: "register",
          element: <Register></Register>
        }
    ]
  },
]);



export default router;