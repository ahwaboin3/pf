import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export default function GridDemo(){
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Grid container spacing={3} mt={3}>
                    <Grid size="grow">
                    <Item>size=grow</Item>
                    </Grid>
                    <Grid size={6}>
                    <Item>size=6</Item>
                    </Grid>
                    <Grid size="grow">
                    <Item>size=grow</Item>
                    </Grid>
                </Grid>
            </Container>
        </>
      );
}