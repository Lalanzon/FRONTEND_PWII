import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/layout'
import LayoutAuth from './layouts/LayoutAuth'
import LandingPage from './views/home'
import Login from './views/login'
import Register from './views/register'
import Verification from './views/verification'
import Home from './views/home'

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },

        ]
    },
    {
        path: '/auth',
        element: <LayoutAuth />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
            {
                path: '/auth/verification',
                element: <Verification />
            }

        ]
    }

])