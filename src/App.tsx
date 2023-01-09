import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Skills from './pages/Skills';
import About from './pages/About';
import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/works',
        element: <Works />
    },
    {
        path: '/skills',
        element: <Skills />
    },
    {
        path: '/about',
        element: <About />
    },
])

export default function App() {
    const [displayMenu, setDisplayMenu] = React.useState(false);
    return (
        <>
            {
                !displayMenu? (
                    <>
                        <div className={"h-[30vh]"}>
                            <Header displayMenu={displayMenu} setDisplayMenu={setDisplayMenu}/>
                        </div>
                        <RouterProvider router={router}/><Footer/>
                    </>
                ) : (
                    <>
                        <div className={"h-[100vh]"}>
                            <Header displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
                        </div>
                    </>
                )
            }
        </>
    );
};
