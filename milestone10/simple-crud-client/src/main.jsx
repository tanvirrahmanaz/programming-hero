// main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";  // <-- ঠিক করা

import MainLayout from './layouts/MainLayout.jsx';
import UserDetails from './components/UserDetails.jsx';
import UpdateUser from './components/UpdateUser.jsx';


const loaderFetchUser = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/users/${params.id}`);
  if (!res.ok) throw new Response("Failed to fetch user", { status: res.status });
  return res.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        index: true, 
        element: <App />,
      },
      {
        path:'users/:id',
        loader: loaderFetchUser,
        element: <UserDetails />,
      },
      {
        path:"update/:id",
        id: "update-user",
        loader: loaderFetchUser,
        element: <UpdateUser />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

