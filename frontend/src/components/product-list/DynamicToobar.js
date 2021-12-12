import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  toolbar: {
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: 25,
    width: "95%",
    height: "20rem",
  },
}))

export default function DynamicToobar() {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      direction="column"
      classes={{ root: classes.toolbar }}
    ></Grid>
  )
}
