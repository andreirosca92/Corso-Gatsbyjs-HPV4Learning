import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ImageBox } from "./ImageBox"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const DynamicImage = () => {
  const data = useStaticQuery(query)
  const image = React.useMemo(() => getImage(data.file), [data.file])
  return (
    <div className="spacer">
      {image ? (
        <ImageBox>
          <GatsbyImage image={image} alt={data.file.name} />
        </ImageBox>
      ) : null}
    </div>
  )
}
export const query = graphql`
  query {
    file(relativePath: { eq: "mountains.jpg" }) {
      name
      size
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: CONSTRAINED
          transformOptions: { grayscale: true }
        )
      }
    }
  }
`

export default DynamicImage
