import React from "react"
import { Grid, Typography, IconButton, Chip } from "@material-ui/core"
import sort from "../../images/sort.svg"
import close from "../../images/close-outline.svg"

export default function Sort({ setOption }) {
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
    <Grid item container justifyContent="space-between" alignItems="center">
      <Grid item>
        <IconButton onClick={() => setOption(null)}>
          <img src={sort} alt="sort" />
        </IconButton>
      </Grid>
      <Grid item xs>
        <Grid container justifyContent="space-around">
          {sortOption.map(opcion => (
            <Grid item key={opcion.label}>
              <Chip label={opcion.label} />
            </Grid>
          ))}
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
