import { createBrowserRouter } from 'react-router-dom';

// layouts
import AuthLayout from './layouts/auth';
import DashboardLayout from './layouts/dashboard';

// pages
import AuthPage from './pages/auth';
import DashboardPage from './pages/dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <AuthPage />
            }
        ]
    },
])

export default router;