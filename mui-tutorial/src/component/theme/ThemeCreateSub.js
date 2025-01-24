import {ThemeProvider, Typography} from "@mui/material"
import { theme } from "./ThemCreator"
export default function ThemeCreateSub(){

    return(
        <ThemeProvider theme={theme}>
            <Typography variant="h3" color="primary">h3 initial color</Typography>
        </ThemeProvider>
    )
    
}