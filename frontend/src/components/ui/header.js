import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  IconButton,
  useMediaQuery,
  Hidden,
  makeStyles,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"

//Estilos personalizados
const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: "red",
  },
  logoText: {
    color: theme.palette.common.offBlack,
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

//Las categories vienen del layout y se agrega al final el Contact us con el spread operator
export default function Header({ categories }) {
  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact" } },
  ]

  //Implmentacion de estilos
  const classes = useStyles()
  //Para saber si es un dispositivo movil md
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  //Renderiza las tabs en una constante
  const tabs = (
    <Tabs
      value={0}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
    >
      {routes.map(route => (
        <Tab label={route.node.name} key={route.node.strapiId} />
      ))}
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  )

  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        {/* Se renderizan las tabs si la pantalla es superior a MD */}
        {matchesMD ? null : tabs}
        <IconButton>
          <img src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img src={cart} alt="cart" />
        </IconButton>
        {/* Componente Hidden para que se muestre solo en pantallas grandes */}
        <Hidden mdDown>
          <IconButton>
            <img src={account} alt="account" />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}
