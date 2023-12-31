import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    background: {
      backgroundColor: '#001928',
      box: "#ffff",
      text: "#ffffff"
    }
  },
  typography: {
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});



export default theme