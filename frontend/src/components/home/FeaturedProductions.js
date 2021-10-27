import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function FeaturedProductions() {
  const data = useStaticQuery(graphql`
    query GetFeatured {
      allStrapiProduct(filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            variants {
              price
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
      <h2>Featured Productions</h2>
    </div>
  )
}
