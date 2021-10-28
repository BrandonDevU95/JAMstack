import React from "react"
import fullStar from "../../images/full-star.svg"
import halfStar from "../../images/half-star.svg"
import emptyStar from "../../images/empty-star.svg"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  size: {
    height: "2rem",
    width: "2rem",
  },
}))

export default function Rating({ number }) {
  const classes = useStyles()
  const diff = 56 - Math.ceil(number)

  return (
    <>
      {Array(Math.floor(number)).map((e, i) => (
        <img src={fullStar} alt="full star" className={classes.size} key={i} />
      ))}
      {number % 1 !== 0 ? <img src={halfStar} alt="half start" /> : null}
    </>
  )
}
