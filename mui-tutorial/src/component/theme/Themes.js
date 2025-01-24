import {
    ThemeProvider,
    Typography,
    createTheme,
    Button,
    Paper,
    CssBaseline
}
from "@mui/material"
import {orange} from "@mui/material/colors"

export default function Themes(){
    const theme = createTheme({
        palette: {
            mode:"dark",
            primary: {
              light: orange[500],
              main: orange[700],
              dark: orange[900],
              contrastText: '#fff',
            },
            secondary: {
              light: '#ff7961',
              main: '#f44336',
              dark: '#ba000d',
              contrastText: '#000',
            },
          },
    });
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h3" color="primary">Theming Example</Typography>
            <Typography variant="h3" color="primary.light">Hello MUI!</Typography>
            <Typography variant="h3" color="primary.dark">Color Primary.Dark</Typography>
            <h3>Start editing to see some magic happen!</h3>
            <Button variant="contained">Button</Button>
            {/* <Paper> */}
            <CssBaseline/>
              <Typography variant="h3" color="primary">Theming Example</Typography>
              <Typography variant="h3" color="primary.light">Hello MUI!</Typography>
              <Typography variant="h3" color="primary.dark">Color Primary.Dark</Typography>
              <h3>Start editing to see some magic happen!</h3>
              <Button variant="contained">Button</Button>
            {/* </Paper> */}
        </ThemeProvider>
    )
}