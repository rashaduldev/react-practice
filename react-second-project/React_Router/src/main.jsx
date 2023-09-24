import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
      path:'/about',
      element:<About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
        },
        {
          path:'/user',
          loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
          element:  <Users></Users>
          },
     

  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
