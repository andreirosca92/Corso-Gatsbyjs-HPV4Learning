import * as React from "react"

import { Layout, Button, CustomButton } from "../components"
import styled from "styled-components"
import DynamicImage from "../components/DynamicImage"
const Wrapper = styled.div`
  color: blueviolet;

  h1 {
    color: green;
  }

  .text {
    text-transform: uppercase;
  }
`
export default function Home() {
  return (
    <Layout>
      <div className="spacer">
        <DynamicImage />
      </div>
    </Layout>
  )
}
