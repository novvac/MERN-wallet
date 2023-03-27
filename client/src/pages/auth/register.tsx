import { Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import AuthHeader from '../../components/partial/auth-header';
import FormControl from '../../components/form-control';

const formInputs = [{
    name: 'firstName',
    type: TextField,
    gridProps: { xs: 12, md: 6 },
    itemProps: {
        placeholder: 'First name'
    }
}, {
    name: 'lastName',
    type: TextField,
    gridProps: { xs: 12, md: 6 },
    itemProps: {
        placeholder: 'Last name',
    }
}, {
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

export default function RegisterPage() {
    return (
        <>
            <AuthHeader
                title="Sign up for an account"
                subtitle="Send, spend and save smarter"
                register
            />

            <FormControl
                items={formInputs}
                submitText='Sign Up'
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