import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './components/ErrorPage'
import Moment, { loader as momentLoader } from './routes/moment'
import FeedRoute from './routes/feed'
import ProfileRoute, { loader as profileLoader } from './routes/profile'
import LoginRoute, { action as loginAction } from './routes/login'
import RegisterRoute from './routes/register'
import NotificationsRoute from './routes/notifications'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'moments/:momentId',
                element: <Moment />,
                loader: momentLoader,
            },
            {
                path: '/',
                element: <FeedRoute />,
            },
            {
                path: '/notifications',
                element: <NotificationsRoute />,
            },
            {
                path: '/profile/:userId',
                element: <ProfileRoute />,
                loader: profileLoader,
            },
            {
                path: '/register',
                element: <RegisterRoute />,
            },
            {
                path: '/login',
                element: <LoginRoute />,
                action: loginAction,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
