import { Button, ButtonProps } from '@mui/material';

type PropsI = {
    register?: boolean
}

export default function GoogleLogin({register, ...props}: PropsI & ButtonProps) {
    return (
        <Button
            {...props}
        >
            {register ? `Sign Up` : `Sign In`} with Google
        </Button>
    )
}