import React from "react"
import { Layout } from "../components"
import * as aboutStyle from "../modules/about.module.css"
import { StaticImage } from "gatsby-plugin-image"
const about = () => {
  return (
    <Layout>
      <div className={aboutStyle.page}>
        <h1>About Page</h1>
        <p className={aboutStyle.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          dui viverra risus tincidunt aliquam eu in ipsum. Aenean mi nibh,
          pharetra posuere massa eu, rhoncus volutpat felis. Pellentesque quam
          nisi, facilisis a lorem ut, iaculis posuere libero. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Nunc sollicitudin nunc id tortor tincidunt maximus. Donec
          commodo condimentum velit eu euismod. Nam viverra bibendum lobortis.
          Vestibulum gravida dictum sapien. Nulla facilisi. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
      </div>
    </Layout>
  )
}

export default about
