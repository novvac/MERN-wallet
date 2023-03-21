import { Typography, Stack, Divider } from '@mui/material';
import { styled } from '@mui/system';

import GoogleLogin from '../login-with-google';

type PropsI = {
    title: string;
    subtitle?: string;
    register?: boolean;
}

export default function AuthHeader(props: PropsI) {
    return (
        <div>
            <Typography
                variant="h4" 
                component="h1" 
                fontWeight={500}
                textAlign='center'
                sx={{ mb: 1 }}
            >
                {props.title}
            </Typography>

            <Typography
                variant="subtitle1"
                component="h2"
                fontWeight={300}
                textAlign='center'
                sx={{ mb: 3 }}
            >
                {props.subtitle}
            </Typography>

            <GoogleLogin
                register={props.register}
                sx={{ mx: 'auto', display: 'block', mb: 4 }}
                variant="outlined"
            />

            <Divider textAlign='center' sx={{ mb: 4 }}>
                <Typography variant='body2' color="#888" fontWeight={300}>
                    Or with email
                </Typography>
            </Divider>
        </div>
    )
}