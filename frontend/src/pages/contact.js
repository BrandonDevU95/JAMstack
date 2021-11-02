import React, { useState } from "react"
import clsx from "clsx"
import {
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
  useMediaQuery,
} from "@material-ui/core"

import validate from "../components/ui/validate"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Layout from "../components/ui/layout"
import address from "../images/address.svg"
import Email from "../images/EmailAdornment"
import send from "../images/send.svg"
import nameAdornment from "../images/name-adornment.svg"
import PhoneAdornment from "../images/phoneAdornment"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "45rem",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "10rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "8rem",
      height: "90rem",
    },
  },
  formContainer: {
    height: "100%",
  },
  formWrapper: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      height: "50%",
      marginTop: "-8rem",
    },
  },
  blockContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: "8rem",
    width: "40rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
    },
  },
  titleContainer: {
    marginTop: "-4rem",
  },
  buttonContainer: {
    marginBottom: "-4rem",
    textTransform: "none",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  sendIcon: {
    marginLeft: "2rem",
  },
  contactInfo: {
    fontSize: "1.5rem",
    marginLeft: "1rem",
  },
  contactIcon: {
    height: "3rem",
    width: "3rem",
  },
  contactEmailIcon: {
    height: "2.25rem",
    width: "3rem",
  },
  infoContainer: {
    height: "21.3rem",
  },
  middleInfo: {
    borderTop: "2px solid #fff",
    borderBottom: "2px solid #fff",
  },
  iconContaner: {
    borderRight: "2px solid #fff",
    height: "7rem",
    width: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    width: "30rem",
  },
  input: {
    color: "#fff",
  },
  fieldContainer: {
    marginBottom: "1rem",
  },
  multilineContainer: {
    marginTop: "1rem",
  },
  emailAdornment: {
    height: 17,
    width: 22,
    marginBottom: 10,
  },
  phoneAdornment: {
    width: 25.173,
    height: 25.122,
  },
  multiline: {
    border: "2px solid #fff",
    borderRadius: 10,
    padding: "1rem",
  },
  multilineError: {
    border: `2px solid ${theme.palette.error.main}`,
  },
  buttonDisable: {
    backgroundColor: theme.palette.grey[500],
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before":
      {
        borderBottom: "2px solid #fff",
      },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}))

const ContactPage = () => {
  const theme = useTheme()
  const classes = useStyles()
  const matchesMd = useMediaQuery(theme => theme.breakpoints.down("md"))

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState({})

  return (
    <Layout>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
        direction={matchesMd ? "column" : "row"}
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
            <Grid item>
              <Grid container direction="column">
                <Grid item classes={{ root: classes.fieldContainer }}>
                  <TextField
                    placeholder="Name"
                    value={name}
                    InputProps={{
                      classes: { input: classes.input },
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={nameAdornment} alt="name" />
                        </InputAdornment>
                      ),
                    }}
                    onBlur={e => {
                      const valid = validate({ name })
                      setErrors({ ...errors, name: !valid.name })
                    }}
                    error={errors.name}
                    helperText={errors.name && "Name is required"}
                    onChange={e => {
                      if (errors.name) {
                        const valid = validate({ name: e.target.value })
                        setErrors({ ...errors, name: !valid.name })
                      }
                      setName(e.target.value)
                    }}
                    classes={{ root: classes.textField }}
                  />
                </Grid>
                <Grid item classes={{ root: classes.fieldContainer }}>
                  <TextField
                    placeholder="Email"
                    value={email}
                    InputProps={{
                      classes: { input: classes.input },
                      startAdornment: (
                        <InputAdornment position="start">
                          <div className={classes.emailAdornment}>
                            <Email color={theme.palette.secondary.main} />
                          </div>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={e => {
                      const valid = validate({ email })
                      setErrors({ ...errors, email: !valid.email })
                    }}
                    error={errors.email}
                    helperText={errors.email && "Email is required"}
                    onChange={e => {
                      if (errors.email) {
                        const valid = validate({ email: e.target.value })
                        setErrors({ ...errors, email: !valid.email })
                      }
                      setEmail(e.target.value)
                    }}
                    classes={{ root: classes.textField }}
                  />
                </Grid>
                <Grid item classes={{ root: classes.fieldContainer }}>
                  <TextField
                    placeholder="Phone"
                    value={phone}
                    InputProps={{
                      classes: { input: classes.input },
                      startAdornment: (
                        <InputAdornment position="start">
                          <div className={classes.phoneAdornment}>
                            <PhoneAdornment
                              color={theme.palette.secondary.main}
                            />
                          </div>
                        </InputAdornment>
                      ),
                    }}
                    onBlur={e => {
                      const valid = validate({ phone })
                      setErrors({ ...errors, phone: !valid.phone })
                    }}
                    error={errors.phone}
                    helperText={errors.phone && "Phone is required"}
                    onChange={e => {
                      if (errors.phone) {
                        const valid = validate({ phone: e.target.value })
                        setErrors({ ...errors, phone: !valid.phone })
                      }
                      setPhone(e.target.value)
                    }}
                    classes={{ root: classes.textField }}
                  />
                </Grid>
                <Grid item classes={{ root: classes.multilineContainer }}>
                  <TextField
                    placeholder="Message"
                    multiline
                    rows={8}
                    value={message}
                    InputProps={{
                      disableUnderline: true,
                      classes: {
                        input: classes.input,
                        multiline: classes.multiline,
                        error: classes.multilineError,
                      },
                    }}
                    onBlur={e => {
                      const valid = validate({ message })
                      setErrors({ ...errors, message: !valid.message })
                    }}
                    error={errors.message}
                    helperText={errors.message && "Message is required"}
                    onChange={e => {
                      if (errors.message) {
                        const valid = validate({ message: e.target.value })
                        setErrors({ ...errors, message: !valid.message })
                      }
                      setMessage(e.target.value)
                    }}
                    classes={{ root: classes.textField }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              component={Button}
              disabled={
                Object.keys(errors).some(error => errors[error] === true) ||
                Object.keys(errors).length !== 4
              }
              classes={{
                root: clsx(classes.buttonContainer, classes.blockContainer, {
                  [classes.buttonDisable]:
                    Object.keys(errors).some(error => errors[error] === true) ||
                    Object.keys(errors).length !== 4,
                }),
              }}
            >
              <Typography variant="h4">send message</Typography>
              <img src={send} alt="send" className={classes.sendIcon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            classes={{ root: classes.infoContainer }}
          >
            <Grid item container alignItems="center">
              <Grid item classes={{ root: classes.iconContaner }}>
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
            <Grid
              item
              container
              alignItems="center"
              classes={{ root: classes.middleInfo }}
            >
              <Grid item classes={{ root: classes.iconContaner }}>
                <div className={classes.contactIcon}>
                  <PhoneAdornment />
                </div>
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
              <Grid item classes={{ root: classes.iconContaner }}>
                <div className={classes.contactEmailIcon}>
                  <Email color="#fff" />
                </div>
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
