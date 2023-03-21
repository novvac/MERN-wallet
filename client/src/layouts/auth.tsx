import { styled } from '@mui/system';
import { Stack, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

const GridContainer = styled(Grid)(({ theme }) => ({
    maxWidth: theme.breakpoints.values.xl,
    height: '100vh',
    maxHeight: 800,
    margin: 'auto',
}))

const OutletWrapper = styled('main')({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 500,
})

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
            <Grid item xs={12} md={5} sx={{ p: 2 }}>
                <StepsBox sx={{ p: 3, width: 1 }}>Steps box</StepsBox>
            </Grid>

            <Grid
                item
                xs={12}
                md={7}
                display="flex"
                direction="column"
                alignItems="center"
                sx={{ pt: 5, px: 5 }}
            >
                <OutletWrapper>
                    <Outlet/>
                </OutletWrapper>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    flex="none"
                    position="sticky"
                    bottom={0}
                    sx={{ background: 'white', py: 5, width: '100%' }}
                >
                    <div>Privacy Policy</div>
                    <div>Copyright 2023</div>
                </Stack>
            </Grid>
        </GridContainer>
    )
}