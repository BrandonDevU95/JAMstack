import clsx from "clsx"
import React, { useState } from "react"
import explore from "../../images/explore.svg"
import Carousel from "react-spring-3d-carousel"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import promoAdornment from "../../images/promo-adornment.svg"
import { Grid, Typography, IconButton, Button } from "@material-ui/core"

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
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  carouselImage: {
    height: "30rem",
    width: "25rem",
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
  },
  carouselContainer: {
    marginLeft: "20rem",
  },
  space: {
    margin: "0rem 15rem",
    marginBottom: "10rem",
  },
  explore: {
    textTransform: "none",
    marginRight: "2rem",
  },
  descriptionContainer: {
    textAlign: "right",
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
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <IconButton
              disableRipple
              onClick={() => setSelectedSlide(index)}
              classes={{
                root: clsx(classes.iconButton, {
                  [classes.space]: selectedSlide !== index,
                }),
              }}
            >
              <img
                src={
                  process.env.GATSBY_STRAPI_URL + node.variants[0].images[0].url
                }
                alt={`image-${index}`}
                className={classes.carouselImage}
              />
            </IconButton>
          </Grid>
          <Grid item>
            {selectedSlide === index ? (
              <Typography variant="h1" classes={{ root: classes.productName }}>
                {node.name.split(" ")[0]}
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
      <Grid item classes={{ root: classes.carouselContainer }}>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography variant="h2" paragraph>
          {slides[selectedSlide].description}
        </Typography>
        <Button>
          <Typography variant="h4" classes={{ root: classes.explore }}>
            Explore
          </Typography>
          <img src={explore} alt="go to product" />
        </Button>
      </Grid>
    </Grid>
  )
}
