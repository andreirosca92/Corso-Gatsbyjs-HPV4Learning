import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const StaticQuery = () => {
  const data = useStaticQuery(query)
  const {
    site: {
      info: { title, otherCourses },
    },
  } = data
  return (
    <div>
      <h4>Scopri i nostri corsi</h4>
      <b>{title}</b>
      <div className="spacer">
        <p>Altri corsi</p>
        <div className="spacer">
          <ul>
            {otherCourses.map(course => {
              return <li key={course.category}>{course.category}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
const query = graphql`
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
