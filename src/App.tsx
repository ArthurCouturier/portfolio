import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Skills from './pages/Skills';
import About from './pages/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/works',
        element: <Works/>
    },
    {
        path: '/skills',
        element: <Skills/>
    },
    {
        path: '/about',
        element: <About/>
    }
])

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
};
