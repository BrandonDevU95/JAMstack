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
  makeStyles,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import { Link, navigate } from "gatsby"
import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"
import menu from "../../images/menu.svg"

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

  const actions = [
    { icon: search, alt: "search", visible: true },
    { icon: cart, alt: "cart", visible: true },
    { icon: account, alt: "account", visible: !matchesMD },
    {
      icon: menu,
      alt: "menu",
      visible: matchesMD,
      onClick: () => setDrawerOpen(true),
    },
  ]

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
        {actions.map(action => (
          <IconButton>
            <img
              className={classes.icon}
              src={action.icon}
              alt={action.alt}
              onClick={action.onClick}
            />
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  )
}
