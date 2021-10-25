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
import { Link } from "gatsby"
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
  logoContainer: {
    [theme.breakpoints.down("md")]: {
      marginRight: "auto",
    },
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 600,
  },
  icon: {
    height: "2rem",
    width: "2rem",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: "#FFF",
  },
}))

//Las categories vienen del layout y se agrega al final el Contact us con el spread operator
export default function Header({ categories }) {
  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact", link: "/contact" } },
  ]

  //Implmentacion de estilos
  const classes = useStyles()
  //Para saber si es un dispositivo movil md
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  // Funcion para determinar la tab activa del menu de navegacion
  const activeIndex = () => {
    const found = routes.indexOf(
      routes.filter(
        ({ node: { name, link } }) =>
          (link || `/${name.toLowerCase()}`) === window.location.pathname
      )[0]
    )

    return found === -1 ? false : found
  }

  //Renderiza las tabs en una constante
  const tabs = (
    <Tabs
      value={activeIndex()}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
    >
      {routes.map(route => (
        <Tab
          component={Link}
          to={route.node.link || `/${route.node.name.toLowerCase()}`}
          classes={{ root: classes.tab }}
          label={route.node.name}
          key={route.node.strapiId}
        />
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
      classes={{ paper: classes.drawer }}
    >
      <List disablePadding>
        {routes.map((route, i) => (
          <ListItem
            selected={activeIndex() === i}
            component={Link}
            to={route.node.link || `/${route.node.name.toLowerCase()}`}
            divider
            button
            key={route.node.strapiId}
          >
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={route.node.name}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  const actions = [
    {
      icon: search,
      alt: "search",
      visible: true,
      onClick: () => console.log("serch"),
    },
    { icon: cart, alt: "cart", visible: true, link: "/cart" },
    { icon: account, alt: "account", visible: !matchesMD, link: "/account" },
    {
      icon: menu,
      alt: "menu",
      visible: matchesMD,
      onClick: () => setDrawerOpen(true),
    },
  ]

  return (
    <AppBar elevation={0} color="transparent" position="static">
      <Toolbar>
        <Button
          component={Link}
          to="/"
          classes={{ root: classes.logoContainer }}
        >
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        {/* Se renderizan las tabs si la pantalla es superior a MD */}
        {matchesMD ? drawer : tabs}
        {actions.map(action => {
          if (action.visible) {
            return (
              <IconButton
                onClick={action.onClick}
                key={action.alt}
                component={action.onClick ? undefined : Link}
                to={action.onClick ? undefined : action.link}
              >
                <img
                  className={classes.icon}
                  src={action.icon}
                  alt={action.alt}
                />
              </IconButton>
            )
          } else {
            return null
          }
        })}
      </Toolbar>
    </AppBar>
  )
}
