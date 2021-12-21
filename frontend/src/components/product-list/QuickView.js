import React from "react"
import { Grid, Typography, Dialog, DialogContent } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({}))

export default function QuickView({ open, setOpen }) {
  const classes = useStyles()

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent></DialogContent>
    </Dialog>
  )
}
