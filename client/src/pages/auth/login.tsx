import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import AuthHeader from '../../components/partial/auth-header';

export default function LoginPage() {
    return (
        <>
            <AuthHeader
                title="Welcome back!"
                subtitle="We are glad that you visit us again 🤩"
            />

            <Typography
                variant="body1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="5px"
            >
                You dont have an account yet?
                <Link to="register">Create for free</Link>
            </Typography>
        </>
    )
}