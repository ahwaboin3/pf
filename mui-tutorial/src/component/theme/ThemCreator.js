import {createTheme} from "@mui/material"
export const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#00796b',
      },
      secondary: {
        main: '#26a69a',
      },
    },
};
export const theme = createTheme({
    themeOptions
});