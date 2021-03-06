import { createTheme } from "@material-ui/core/styles"

const green = "#99B898"
const darkGreen = "#708670"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "#2A363B"
const grey = "#747474"
const white = "#FFFFFF"

const theme = createTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: darkGreen,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: green,
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "2.5rem",
      fontWeight: 500,
      color: white,
    },
    h3: {
      fontSize: "1.5rem",
      fontFamily: "Montserrat",
      fontWeight: 300,
      color: green,
    },
    h4: {
      fontFamily: "Philosopher",
      fontSize: "2.5rem",
      fontStyle: "italic",
      fontWeight: 700,
      color: white,
    },
    h5: {
      fontFamily: "Philosopher",
      fontSize: "1.2rem",
      fontStyle: "italic",
      fontWeight: 700,
      color: white,
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1.2rem",
      color: grey,
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: darkGreen,
      },
      label: {
        fontFamily: "Montserrat",
        fontSize: "1.2rem",
        color: "#fff",
        fontWeight: 500,
      },
    },
  },
})

export default theme
