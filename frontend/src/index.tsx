import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createBrowserRouter, RouterProvider, Route, redirect } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './components/ErrorPage'
import Moment, { loader as momentLoader } from './routes/moment'
import FeedRoute, { loader as feedLoader } from './routes/feed'
import ProfileRoute, { loader as profileLoader } from './routes/profile'
import LoginRoute, { action as loginAction } from './routes/login'
import RegisterRoute, { action as registerAction } from './routes/register'
import NotificationsRoute from './routes/notifications'
import FeedReload, { loader as feedReloader } from './routes/feedreload'
import TagRoute, { loader as tagLoader, action as tagAction } from './routes/tag'

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
                path: '/:filter/reload',
                element: <FeedReload />,
                loader: feedReloader,
            },
            {
                path: '/',
                element: <FeedRoute />,
                loader: feedLoader,
            },
            {
                path: '/:filter',
                element: <FeedRoute />,
                loader: feedLoader,
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
                action: registerAction,
            },
            {
                path: '/login',
                element: <LoginRoute />,
                action: loginAction,
            },
            {
                path: '/tag/:tag_id',
                element: <TagRoute />,
                loader: tagLoader,
            },
            {
                path: '/tag/',
                element: <TagRoute />,
                action: tagAction,
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
