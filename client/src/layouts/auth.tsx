import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div>
            auth layout

            <Outlet />
        </div>
    )
}