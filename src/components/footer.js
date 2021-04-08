import React from "react"
import { Container } from "reactstrap"

const footer = () => (
  <footer className="footer">
    <Container>
      <div className="text-center">
        © {new Date().getFullYear()} Alexander Wittmann
      </div>
    </Container>
  </footer>
)

export default footer
