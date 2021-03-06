import React, { useState } from "react"
import {
  Grid,
  Typography,
  Dialog,
  DialogContent,
  Button,
  Chip,
} from "@material-ui/core"
import Rating from "../home/Rating"
import { makeStyles } from "@material-ui/core/styles"
import frame from "../../images/selected-frame.svg"
import explore from "../../images/explore.svg"
import Sizes from "./Sizes"
import Swatches from "./Swatches"

const useStyles = makeStyles(theme => ({
  selectedFrame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60.4rem",
    width: "73.5rem",
    padding: "0 !important",
  },
  dialog: {
    maxWidth: "100%",
  },
  productImage: {
    height: "40rem",
    width: "40rem",
    marginTop: "5rem",
  },
  toolBar: {
    backgroundColor: theme.palette.primary.main,
    height: "13rem",
    marginTop: "2rem",
    padding: "0.5rem 1rem",
  },
  stock: {
    color: "#fff",
  },
  details: {
    color: "#fff",
    textTransform: "none",
    fontSize: "1.5rem",
  },
  exploreIcon: {
    height: "1.5rem",
    width: "2rem",
    marginLeft: "0.5rem",
  },
  detailButton: {
    padding: "0",
  },
  infoContainer: {
    height: "100%",
  },
  chipRoot: {
    transform: "scale(1.5)",
  },
  chipContainer: {
    display: "flex",
    alignItems: "center",
  },
}))

export default function QuickView({
  open,
  setOpen,
  url,
  name,
  price,
  product,
}) {
  const classes = useStyles()
  const [selectedSize, setSelectedSize] = useState(null)

  let sizes = []
  let colors = []
  product.node.variants.map(variant => {
    sizes.push(variant.size)
    colors.push(variant.color)
  })

  return (
    <Dialog
      classes={{ paper: classes.dialog }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogContent classes={{ root: classes.selectedFrame }}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img
              src={url}
              alt="Product Image"
              className={classes.productImage}
            />
          </Grid>
          <Grid
            item
            container
            justifyContent="space-between"
            classes={{ root: classes.toolBar }}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                classes={{ root: classes.infoContainer }}
              >
                <Grid item>
                  <Typography variant="h4">{name}</Typography>
                  <Rating number={4} />
                </Grid>
                <Grid item>
                  <Typography variant="h3" classes={{ root: classes.stock }}>
                    12 Currently In Stock
                  </Typography>
                  <Button classes={{ root: classes.detailButton }}>
                    <Typography
                      variant="h3"
                      classes={{ root: classes.details }}
                    >
                      Details
                    </Typography>
                    <img
                      src={explore}
                      className={classes.exploreIcon}
                      alt="go to product detail page"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item classes={{ root: classes.chipContainer }}>
              <Chip label={`$${price}`} classes={{ root: classes.chipRoot }} />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Sizes
                  sizes={sizes}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
                <Swatches colors={colors} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
