import React from "react"
import { Grid, Typography, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import marketingAdornment from "../../images/marketing-adornment.svg"
import moreByUs from "../../images/more-by-us.svg"
import store from "../../images/store.svg"

const useStyles = makeStyles(theme => ({
  button: {
    backgroundImage: `url(${marketingAdornment})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "50rem",
    width: "50rem",
    transition: "transform 0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("lg")]: {
      height: "40rem",
      width: "40rem",
      margin: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "30rem",
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "25rem",
      width: "25rem",
    },
    textDecoration: "none",
  },
  container: {
    margin: "15rem 0",
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      height: "8rem",
      width: "8rem",
    },
  },
  label: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem",
    },
  },
}))

export default function MarketingButtons() {
  const classes = useStyles()

  const buttons = [
    { label: "Store", icon: store, link: "/hoodies" },
    { label: "More by Us", icon: moreByUs, href: "https://google.com" },
  ]

  return (
    <Grid
      container
      justifyContent={"space-around"}
      classes={{ root: classes.container }}
    >
      {buttons.map(button => (
        <Grid item key={button.link}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction={"column"}
            classes={{ root: classes.button }}
            component={button.link ? Link : "a"}
            to={button.link ? button.link : undefined}
            href={button.href ? button.href : undefined}
          >
            <Grid item>
              <img
                className={classes.icon}
                src={button.icon}
                alt={button.label}
              />
            </Grid>
            <Grid item>
              <Typography classes={{ root: classes.label }} variant={"h1"}>
                {button.label}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
