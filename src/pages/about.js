import React from "react"
import { Layout } from "../components"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BigImage from "../assets/images/mountains.jpg"
const ImageBox = styled.div({
  maxWidth: "80vw",
  borderRadius: "16px",
  margin: "unset auto",
  border: "1px solid var(--purple-400)",
  width: "100%",
  overflow: "hidden",
})
const about = () => {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <div className="spacer">
          <h3>constrained</h3>

          <ImageBox>
            <StaticImage
              as="article"
              className="prova"
              src="../assets/images/mountains.jpg"
              placeholder="tracedSVG"
              Layout="constrained"
            />
          </ImageBox>
        </div>
        <div className="spacer"></div>
      </div>
      <div>
        <div className="spacer">
          <h3>fixed</h3>

          <ImageBox>
            <StaticImage
              as="article"
              className="prova"
              src="../assets/images/mountains.jpg"
              placeholder="tracedSVG"
              layout="fixed"
              height={300}
              width={200}
            />
          </ImageBox>
        </div>
        <div className="spacer"></div>
      </div>
      <div>
        <div className="spacer">
          <h3>fullwidth</h3>

          <ImageBox>
            <StaticImage
              as="article"
              className="prova"
              src="../assets/images/mountains.jpg"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
          </ImageBox>
        </div>
        <div className="spacer"></div>
      </div>
    </Layout>
  )
}

export default about
