import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  size: {
    color: "#fff",
  },
  button: {
    border: "3px solid #fff",
    borderRadius: 50,
    height: "3rem",
    width: "3rem",
    minWidth: 0,
  },
}))

export default function Sizes({ sizes }) {
  const classes = useStyles()
  const possibleSizes = ["S", "M", "L"]
  let actualSizes = []

  if (possibleSizes.every(size => sizes.includes(size))) {
    actualSizes = possibleSizes
  }

  return (
    <Grid item container justifyContent="space-between">
      {actualSizes.map(size => (
        <Grid item key={size}>
          <Button classes={{ root: classes.button }}>
            <Typography variant="h3" classes={{ root: classes.size }}>
              {size}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}
