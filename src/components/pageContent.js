import React from "react"
import { Row, Col } from "reactstrap"

const pageContent = ({ children }) => (
  <Row>
    <Col md={{ size: 10, offset: 1 }} sm={{ size: 12 }}>
      {children}
    </Col>
  </Row>
)

export default pageContent
