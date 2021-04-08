import React from "react"
import { Container } from "reactstrap"

import Head from "./head"
import Header from "./header"
import Footer from "./footer"

const layout = ({ children, location }) => (
  <>
    <Head />
    <Header location={location} />
    <Container>
      <br />
      <br />
      {children}
    </Container>
    <Footer />
  </>
)

export default layout
