import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Donate from '../components/Donate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "donate",
        element: 
          <Donate classname="py-2 h-fit w-fit text-small rounded-md border-primary  px-8 border " />
        ,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App