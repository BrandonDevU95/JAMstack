import React, { useState } from "react"
import clxs from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography, IconButton, Button, Chip } from "@material-ui/core"
import explore from "../../images/explore.svg"
import featuredAdornment from "../../images/featured-adornment.svg"
import frame from "../../images/product-frame-grid.svg"
import Rating from "./Rating"

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
    zIndex: 1,
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: "20rem",
    width: "24.5rem",
    zIndex: 0,
    transition: "transform 0.5s ease-in-out",
    padding: "1rem 2rem",
  },
  slideLeft: {
    transform: "translate(-24.5rem, 0px)",
  },
  slideRight: {
    transform: "translate(24.5rem, 0px)",
  },
  productContainer: {
    margin: "5rem 0",
  },
  exploreContainer: {
    marginTop: "auto",
  },
  exploreButton: {
    textTransform: "none",
  },
  exploreIcon: {
    height: "1.5rem",
    marginLeft: "1rem",
  },
  chipLabel: {
    ...theme.typography.h5,
  },
  chipRoot: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function FeaturedProductions() {
  const [expanded, setExpanded] = useState(null)
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
            <IconButton
              onClick={() =>
                expanded === i ? setExpanded(null) : setExpanded(i)
              }
              classes={{ root: classes.frame }}
            >
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
              classes={{
                root: clxs(classes.slide, {
                  [classes.slideLeft]:
                    expanded === i && aligment === "flex-end",
                  [classes.slideRight]:
                    expanded === i &&
                    (aligment === "flex-start" || aligment === "center"),
                }),
              }}
            >
              <Grid item>
                <Typography variant="h4">{node.name.split(" ")[0]}</Typography>
              </Grid>
              <Grid item>
                <Rating number={4.5} />
              </Grid>
              <Grid item>
                <Chip
                  classes={{ root: classes.chipRoot, label: classes.chipLabel }}
                  label={`$${node.variants[0].price}`}
                />
              </Grid>
              <Grid item classes={{ root: classes.exploreContainer }}>
                <Button classes={{ root: classes.exploreButton }}>
                  <Typography variant="h5">Details</Typography>
                  <img
                    className={classes.exploreIcon}
                    src={explore}
                    alt="go to details"
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}
