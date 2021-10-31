import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"
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
  blockContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: "8rem",
    width: "40rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginTop: "-4rem",
  },
  buttonContainer: {
    marginBottom: "-4rem",
  },
  sendButton: {
    textTransform: "none",
  },
  sendIcon: {
    marginLeft: "2rem",
  },
  contactInfo: {
    fontSize: "1.5rem",
  },
  contactIcon: {
    height: "3rem",
    width: "3rem",
    margin: "1rem",
  },
  contactEmailIcon: {
    height: "2.25rem",
    width: "4rem",
    margin: "1rem",
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
            <Grid
              item
              classes={{
                root: clsx(classes.titleContainer, classes.blockContainer),
              }}
            >
              <Typography variant="h4">Contact Us</Typography>
            </Grid>
            <Grid
              item
              classes={{
                root: clsx(classes.buttonContainer, classes.blockContainer),
              }}
            >
              <Button classes={{ root: classes.sendButton }}>
                <Typography variant="h4">send message</Typography>
                <img src={send} alt="send" className={classes.sendIcon} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item container alignItems="center">
              <Grid item>
                <img
                  src={address}
                  alt="address"
                  className={classes.contactIcon}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  classes={{ root: classes.contactInfo }}
                >
                  1234 S Example St Wichita KS 67001
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <img src={phone} alt="phone" className={classes.contactIcon} />
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  classes={{ root: classes.contactInfo }}
                >
                  (123) 456-7890
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item>
                <img
                  src={email}
                  alt="email"
                  className={classes.contactEmailIcon}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  classes={{ root: classes.contactInfo }}
                >
                  contact@var-x.com.mx
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage
