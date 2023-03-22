import * as React from "react"

import { Layout, Button, CustomButton } from "../components"
import styled from "styled-components"
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
      <Wrapper>
        <div>
          <h1>Sono la home page</h1>
          <p className="text">
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
          <Button>Premimi</Button>
          <CustomButton isFullwidth>Sono Custom</CustomButton>
        </div>
      </Wrapper>
    </Layout>
  )
}
