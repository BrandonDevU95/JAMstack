import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core"

export default function Header() {
  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar>
        <Button>
          <Typography variant="h1">Var X</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
