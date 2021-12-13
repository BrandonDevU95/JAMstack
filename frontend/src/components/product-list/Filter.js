import React from "react"
import { Grid, Typography, IconButton, Chip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import filter from "../../images/filter.svg"
import close from "../../images/close-outline.svg"

const useStyles = makeStyles(theme => ({
  chipRoot: {
    backgroundColor: theme.palette.secondary.main,
  },
  chipLabel: {
    ...theme.typography.body1,
    color: "#fff",
    fontWeight: 500,
  },
}))

export default function Filter({ setOption, filterOptions }) {
  const classes = useStyles()

  return (
    <Grid item container justifyContent="space-between" alignItems="center">
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <img src={filter} alt="filter" />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Grid container justifyContent="space-around">
          {/* {sortOption.map(opcion => (
            <Grid item key={opcion.label}>
              <Chip
                label={opcion.label}
                classes={{ root: classes.chipRoot, label: classes.chipLabel }}
              />
            </Grid>
          ))} */}
        </Grid>
      </Grid>
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <img src={close} alt="" />
        </IconButton>
      </Grid>
    </Grid>
  )
}
