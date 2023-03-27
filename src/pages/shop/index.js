import { Link, graphql } from "gatsby"
import React from "react"

const ShopHome = ({ data }) => {
  const title = data.site.info.title
  return (
    <div>
      <h1>ShopHome</h1>
      <nav
        style={{
          display: "flex",
          gap: "4px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/shop/shoes/">Shoes</Link>
        <Link to="/shop/socks/">Socks</Link>
      </nav>
      <div className="spacer">{title}</div>
    </div>
  )
}
export const data = graphql`
  query MySecondQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        type {
          category
          level
          score
        }
        dummyData
        otherCourses {
          category
          level
          score
        }
      }
    }
    allSite {
      nodes {
        id
      }
    }
  }
`

export default ShopHome
