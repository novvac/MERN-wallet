import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import AuthHeader from '../../components/partial/auth-header';

export default function RegisterPage() {
    return (
        <>
            <AuthHeader
                title="Sign up for an account"
                subtitle="Send, spend and save smarter"
                register
            />

            <Typography
                variant="body1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="5px"
            >
                Do you have an account?
                <Link to="/auth">Sign in</Link>
            </Typography>
        </>
    )
}