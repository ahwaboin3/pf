import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

export default function Icons(){
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid size={6}>
                    1
                </Grid>
                <Grid size={6}>
                    2
                </Grid>
            </Grid>
        </Box>
    )
}