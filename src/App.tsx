import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Works from './pages/Works.tsx';
import Skills from './pages/Skills.tsx';
import About from './pages/About.tsx';

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
