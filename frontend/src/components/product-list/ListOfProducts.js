import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ProductFrameGrid from "./ProductFrameGrid"

const useStyles = makeStyles(theme => ({}))

export default function ListOfProducts({ products }) {
  const classes = useStyles()

  return (
    <Grid item container>
      {products.map(product =>
        product.node.variants.map(variant => (
          <ProductFrameGrid
            key={variant.id}
            variant={variant}
            product={product}
          />
        ))
      )}
    </Grid>
  )
}
