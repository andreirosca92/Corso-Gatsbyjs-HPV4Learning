import React from "react"
import { Layout } from "../components"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BigImage from "../assets/images/big-image.jpg"
const ImageBox = styled.div({
  maxWidth: "343px",
  borderRadius: "16px",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  "& img": {
    width: "100%",
  },
})
const about = () => {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <div className="spacer">
          <h3>Images</h3>
          <ImageBox className="spacer">
            <img src={BigImage} />
          </ImageBox>
          <ImageBox>
            <StaticImage
              as="article"
              className="prova"
              src="../assets/images/big-image.jpg"
              placeholder="tracedSVG"
            />
          </ImageBox>
          <ImageBox>
            <StaticImage src="https://thumbs.dreamstime.com/z/sushi-giapponesi-4670591.jpg" />
          </ImageBox>
        </div>
        <div className="spacer"></div>
      </div>
    </Layout>
  )
}

export default about
