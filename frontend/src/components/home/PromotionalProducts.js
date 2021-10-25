import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"

export default function PromotionalProducts() {
  const data = useStaticQuery(graphql`
    query GetPromo {
      allStrapiProduct(filter: { promo: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            description
            variants {
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div>
      <h1>Promotional Products</h1>
    </div>
  )
}
