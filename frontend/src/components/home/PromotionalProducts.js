import clsx from "clsx"
import React, { useState } from "react"
import explore from "../../images/explore.svg"
import Carousel from "react-spring-3d-carousel"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import promoAdornment from "../../images/promo-adornment.svg"
import { Grid, Typography, IconButton } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "70rem",
    padding: "30rem 10rem 10rem 10rem",
  },
  productName: {
    color: "#fff",
  },
}))

export default function PromotionalProducts() {
  const [selectedSlide, setSelectedSlide] = useState(0)
  const classes = useStyles()

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

  var slides = []

  data.allStrapiProduct.edges.map(({ node }, index) =>
    slides.push({
      key: index,
      content: (
        <Grid container direction="column">
          <Grid item>
            <IconButton disableRipple>
              <img
                src={
                  process.env.GATSBY_STRAPI_URL + node.variants[0].images[0].url
                }
                alt={`image-${index}`}
              />
            </IconButton>
          </Grid>
          <Grid item>
            {selectedSlide === index ? (
              <Typography variant="h1" classes={{ root: classes.productName }}>
                {node.name}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      ),
      description: node.description,
    })
  )

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item>{slides[selectedSlide].description}</Grid>
    </Grid>
  )
}
