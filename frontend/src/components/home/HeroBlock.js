import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Lottie from "react-lottie"
import animationData from "../../images/data.json"

export default function HeroBlock() {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData,
  }
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography align="center" variant="h1">
              The Premier <br />
              Developer Clothing Line
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h3">
              higt quality, custom-designed shirts, hats and hoodies <br />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Lottie isStopped options={defaultOptions} width="35rem" />
      </Grid>
    </Grid>
  )
}
