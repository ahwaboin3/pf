import Intro from "./Intro"
import {ThemeProvider,createTheme} from "@mui/material"
import { orange,red } from '@mui/material/colors';

const theme=createTheme({
    palette:{
      primary:{
        main:"#CCC"
      },
      secondary:{
        main:orange[500]
      },
      myCustomColor:{
        main:red[400],
        superDark:red[800],
        superLight:red[100]
      },
      spacing:1
    },
    typography:{
      myVariant:{
        fontSize:"3rem",
        color:orange[500]
      }
    }
  })

const IntroSuper=()=>{
    return(
        <ThemeProvider theme={theme}>
            <Intro/>
        </ThemeProvider>
    )
}
export default IntroSuper