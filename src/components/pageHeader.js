import React from "react"
import { Row, Col } from "reactstrap"

const pageHeader = ({ text }) => (
  <Row>
    <Col md={{ size: 10, offset: 1 }} sm={{ size: 12 }}>
      <h1 className="text-primary">{text}</h1>
    </Col>
  </Row>
)

export default pageHeader
