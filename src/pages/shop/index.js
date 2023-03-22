import { Link } from "gatsby"
import React from "react"

const ShopHome = props => {
  console.log(props)
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
    </div>
  )
}
const data = graphql`
  query MyFirstQuery {
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
