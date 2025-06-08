import {
  createBrowserRouter,
} from "react-router";

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import JobDetails from "../pages/DetailsPage/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../MyApplication/MyApplication";



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
        },
        {
          path: "jobs/:id",
          element: <JobDetails></JobDetails>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: "apply/:id",
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: "login",
          element: <LogIn></LogIn>
        },
        {
          path: "my-applications",
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        }
    ]
  },
]);



export default router;