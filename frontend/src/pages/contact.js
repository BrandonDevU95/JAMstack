import React from "react"
import { Link } from "gatsby"
import { Typography, Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/ui/layout"
import address from "../images/address.svg"
import phone from "../images/phone-adornment.svg"
import email from "../images/email-adornment.svg"
import send from "../images/send.svg"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "40rem",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "10rem",
  },
  formContainer: {
    height: "100%",
  },
  formWrapper: {
    height: "100%",
  },
  titleContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: "5rem",
    width: "20rem",
  },
  buttonContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: "5rem",
    width: "20rem",
  },
}))

const ContactPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
      >
        <Grid item classes={{ root: classes.formWrapper }}>
          <Grid
            container
            classes={{ root: classes.formContainer }}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item classes={{ root: classes.titleContainer }}>
              <Typography variant="h4">Contact Us</Typography>
            </Grid>
            <Grid item classes={{ root: classes.buttonContainer }}>
              <Button>
                <Typography variant="h4">send message</Typography>
                <img src={send} alt="send" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item container>
              <Grid item>
                <img src={address} alt="address" />
              </Grid>
              <Grid item>
                <Typography variant="h2">
                  1234 S Example St Wichita KS 67001
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <img src={phone} alt="phone" />
              </Grid>
              <Grid item>
                <Typography variant="h2">(123) 456-7890</Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <img src={email} alt="email" />
              </Grid>
              <Grid item>
                <Typography variant="h2">contact@var-x.com.mx</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage
