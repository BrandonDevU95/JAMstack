import clsx from "clsx"
import React, { useState } from "react"
import explore from "../../images/explore.svg"
import Carousel from "react-spring-3d-carousel"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import promoAdornment from "../../images/promo-adornment.svg"
import {
  Grid,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "70rem",
    padding: "30rem 10rem 10rem 10rem",
    [theme.breakpoints.down("lg")]: {
      padding: "20rem 2rem 2rem 2rem",
    },
    [theme.breakpoints.down("xs")]: {
      overflow: "hidden",
    },
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
    [theme.breakpoints.down("sm")]: {
      height: "25rem",
      width: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "20rem",
      width: "15rem",
    },
  },
  carouselContainer: {
    marginLeft: "20rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0rem",
      height: "30rem",
    },
  },
  space: {
    margin: "0 15rem 10rem 15rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 8rem 10rem 8rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 5rem 10rem 5rem",
    },
  },
  explore: {
    textTransform: "none",
    marginRight: "2rem",
  },
  descriptionContainer: {
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}))

export default function PromotionalProducts() {
  const classes = useStyles()
  const [selectedSlide, setSelectedSlide] = useState(0)
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

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
      justifyContent={matchesMD ? "space-around" : "space-between"}
      alignItems="center"
      classes={{ root: classes.mainContainer }}
      direction={matchesMD ? "column" : "row"}
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
