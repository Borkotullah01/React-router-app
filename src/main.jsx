import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import React router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Carousel from './Components/Carousel/Carousel.jsx';
import About from './Components/About/About.jsx';
import AllPosts from './Components/AllPosts/AllPosts.jsx';
import Details from './Components/Details/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/carousel',
        element: <Carousel></Carousel>
      },
      {
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <AllPosts></AllPosts>
      },
      {
        path: '/posts/:postsId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`),
        element: <Details></Details>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
