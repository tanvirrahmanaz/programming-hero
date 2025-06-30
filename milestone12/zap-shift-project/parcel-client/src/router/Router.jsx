import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Authentication.jsx/Login";
import Register from "../pages/Authentication.jsx/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      }
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
     {
       path: "login",
      element : <Login></Login>
     },
     {
      path: 'register',
      element: <Register></Register>
     }
    ]
  }
]);

