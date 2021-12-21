import React from "react"
import Layout from "../components/ui/Layout"
import { Grid } from "@material-ui/core"
import { graphql } from "gatsby"
import DynamicToobar from "../components/product-list/DynamicToobar"
import ListOfProducts from "../components/product-list/ListOfProducts"

export default function ProductList({
  pageContext: { filterOptions, name, description },
  data: {
    allStrapiProduct: { edges: products },
  },
}) {
  return (
    <Layout>
      <Grid container direction="column" alignItems="center">
        <DynamicToobar
          filterOptions={filterOptions}
          name={name}
          description={description}
        />
        <ListOfProducts products={products} />
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query GetCategoryProducts($id: String!) {
    allStrapiProduct(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          name
          variants {
            color
            id
            price
            size
            style
            images {
              url
            }
          }
        }
      }
    }
  }
`
