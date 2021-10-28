import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography, IconButton } from "@material-ui/core"
import featuredAdornment from "../../images/featured-adornment.svg"
import frame from "../../images/product-frame-grid.svg"

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "180rem",
    padding: "0 2.5rem",
  },
  featured: {
    height: "20rem",
    width: "20rem",
  },
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: "center ",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: 0,
    height: "24.8rem",
    width: "25rem",
    boxSizing: "border-box",
    boxShadow: theme.shadows[5],
    position: "absolute",
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: "20rem",
    width: "24.5rem",
  },
  productContainer: {
    margin: "5rem 0",
  },
}))

export default function FeaturedProductions() {
  const classes = useStyles()
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

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      classes={{ root: classes.background }}
    >
      {data.allStrapiProduct.edges.map(({ node }, i) => {
        const aligment =
          i === 0 || i === 3
            ? "flex-start"
            : i === 1 || i === 4
            ? "center"
            : "flex-end"

        return (
          <Grid
            item
            container
            justifyContent={aligment}
            key={node.strapiId}
            classes={{ root: classes.productContainer }}
            alignItems="center"
          >
            <IconButton classes={{ root: classes.frame }}>
              <img
                src={
                  process.env.GATSBY_STRAPI_URL + node.variants[0].images[0].url
                }
                alt={node.name}
                className={classes.featured}
              />
            </IconButton>
            <Grid
              container
              direction="column"
              classes={{ root: classes.slide }}
            ></Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}
