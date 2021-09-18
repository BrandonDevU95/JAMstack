import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"

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

export default function Header({ categories }) {
  const routes = [
    ...categories,
    { node: { name: "Contact Us", strapiId: "contact" } },
  ]
  const classes = useStyles()
  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        <Tabs
          value={0}
          classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
        >
          {routes.map(route => (
            <Tab label={route.node.name} key={route.node.strapiId} />
          ))}
        </Tabs>
        <IconButton>
          <img src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img src={cart} alt="cart" />
        </IconButton>
        <IconButton>
          <img src={account} alt="account" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
