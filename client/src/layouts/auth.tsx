import { styled } from '@mui/system';
import { Stack, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

const GridContainer = styled(Grid)(({ theme }) => ({
    maxWidth: theme.breakpoints.values.xl,
    height: '100vh',
    maxHeight: 800,
    margin: 'auto',
}))

const StepsBox = styled('div')({
    background: '#194bfb',
    color: 'white',
    height: '100%',
    position: 'sticky',
    maxHeight: 'calc(100vh - 32px)',
    top: 16
})

export default function AuthLayout() {
    return (
        <GridContainer
            container
            justifyContent="space-between"
            alignItems="stretch"
        >
            <Grid item xs={12} md={4} sx={{ p: 2 }}>
                <StepsBox sx={{ p: 3, width: 1 }}>Steps box</StepsBox>
            </Grid>

            <Grid
                item
                xs={12}
                md={8}
                display="flex"
                direction="column"
                sx={{ pt: 5, px: 5 }}
            >
                <Outlet/>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    flex="none"
                    position="sticky"
                    bottom={0}
                    sx={{ background: 'white', py: 5 }}
                >
                    <div>Privacy Policy</div>
                    <div>Copyright 2023</div>
                </Stack>
            </Grid>
        </GridContainer>
    )
}