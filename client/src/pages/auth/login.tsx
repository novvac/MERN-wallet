import { Typography, TextField, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import AuthHeader from '../../components/partial/auth-header';
import FormControl from '../../components/form-control';

const formInputs = [{
    name: 'email',
    type: TextField,
    gridProps: { xs: 12 },
    itemProps: {
        placeholder: 'Email address',
        type: 'email'
    }
}, {
    name: 'password',
    type: TextField,
    gridProps: { xs: 12 },
    itemProps: {
        placeholder: 'Password',
        type: 'password'
    }
}]

export default function LoginPage() {
    return (
        <>
            <AuthHeader
                title="Welcome back!"
                subtitle="We are glad that you visit us again 🤩"
            />

            <FormControl items={formInputs} submitText="Sign In" />

            <Typography
                variant="body1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="5px"
                sx={{ mt: 5}}
            >
                You dont have an account yet?
                <Link to="register">Create for free</Link>
            </Typography>
        </>
    )
}