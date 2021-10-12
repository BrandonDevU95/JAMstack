import React, { useState } from "react"
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
  icon: {
    height: "3rem",
    width: "3rem",
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

  const [drawerOpen, setDrawerOpen] = useState(false)

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
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <List disablePadding>
        {routes.map(route => (
          <ListItem divider button key={route.node.strapiId}>
            <ListItemText primary={route.node.name} />
          </ListItem>
        ))}
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
        {matchesMD ? drawer : tabs}
        <IconButton>
          <img className={classes.icon} src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img className={classes.icon} src={cart} alt="cart" />
        </IconButton>
        {/* Componente Hidden para que se muestre solo en pantallas grandes */}
        <IconButton onClick={() => (matchesMD ? setDrawerOpen(true) : null)}>
          <img
            className={classes.icon}
            src={matchesMD ? menu : account}
            alt={matchesMD ? "menu" : "account"}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
