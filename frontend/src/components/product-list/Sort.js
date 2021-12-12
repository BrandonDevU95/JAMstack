import React from "react"
import { Grid, Typography, IconButton, Chip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import sort from "../../images/sort.svg"
import close from "../../images/close-outline.svg"

const useStyles = makeStyles(theme => ({}))

export default function Sort() {
  const classes = useStyles()

  const sortOption = [
    { label: "A-Z" },
    { label: "Z-A" },
    { label: "NEWEST" },
    { label: "OLDEST" },
    { label: "PRICE ↑" },
    { label: "PRICE ↓" },
    { label: "REVIEWS" },
  ]
  return (
    <Grid item container justifyContent="space-between" alignOtems="center">
      <Grid item>
        <IconButton>
          <img src={sort} alt="sort" />
        </IconButton>
      </Grid>
      <Grid item>
        <Grid container justify="space-between">
          {sortOption.map(opcion => (
            <Grid item key={opcion.label}>
              <Chip label={opcion.label} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <IconButton>
          <imge src={close} alt="" />
        </IconButton>
      </Grid>
    </Grid>
  )
}
