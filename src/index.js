import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import About from './containers/about/About';
import { Number } from './containers';
import { Cancer } from './containers';
import { Text } from './containers';
import { Gilbert } from './containers';
import { Ocr } from './containers';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element :<App/>,
    },
    {
        path: "about",
        element :<About/>,
    }
    ,
    {
        path: "home",
        element :<App/>,
    },
    {
        path: "ocr",
        element :<Ocr/>,
    },
    {
        path: "cancer",
        element :<Cancer/>,
    },
    {
        path: "number-plate",
        element :<Number/>
    },
    {
        path: "text",
        element :<Text/>
    },
    {
        path: "gilbert",
        element :<Gilbert/>
    }
    
])

// ReactDOM.render(<App />,document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
)

