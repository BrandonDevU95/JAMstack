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
}))

export default function Header() {
  const classes = useStyles()
  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar>
        <Button>
          <Typography variant="h1">Var X</Typography>
        </Button>
        <Tabs value={0} classes={{ indicator: classes.coloredIndicator }}>
          <Tab label="Hats" />
          <Tab label="Hoodies" />
          <Tab label="Shirts" />
          <Tab label="Contact Us" />
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
