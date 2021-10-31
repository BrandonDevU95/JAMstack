import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import cta from "../../images/cta.svg"

const useStyles = makeStyles(theme => ({
  account: {
    color: "#fff",
    marginLeft: "2rem",
  },
  body: {
    maxWidth: "45rem",
  },
  container: {
    marginBottom: "15rem",
  },
  buttonContainer: {
    marginTop: "3rem",
  },
}))

export default function CallToAction() {
  const classes = useStyles()
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      classes={{ root: classes.container }}
    >
      <Grid item>
        <img src={cta} alt="quality committed" />
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">Committed To Quality</Typography>
          </Grid>
          <Grid item classes={{ root: classes.body }}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, nisl eget consectetur tempor, nisi nunc interdum nisl,
              euismod consectetur nisi nunc euismod.
            </Typography>
          </Grid>
          <Grid item container classes={{ root: classes.buttonContainer }}>
            <Grid item>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                color="primary"
              >
                Contact Us
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/account"
                variant="contained"
                color="primary"
                classes={{ root: classes.account }}
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
