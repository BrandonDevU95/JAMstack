import React from "react"
import { Link } from "gatsby"
import { Typography, Grid, makeStyles, Button } from "@material-ui/core"
import Layout from "../components/ui/layout"
import address from "../images/address.svg"
import phone from "../images/phone-adornment.svg"
import email from "../images/email-adornment.svg"
import send from "../images/send.svg"

const ContactPage = () => (
  <Layout>
    <Grid container justifyContent="space-around" alignItem="center">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4">Contact Us</Typography>
          </Grid>
          <Grid item>
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

export default ContactPage
