import React from "react"
import Layout from "../components/ui/Layout"
import { Grid } from "@material-ui/core"
import DynamicToobar from "../components/product-list/DynamicToobar"

export default function ProductList({ pageContext }) {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToobar filterOptions={pageContext.filterOptions} />
      </Grid>
    </Layout>
  )
}
