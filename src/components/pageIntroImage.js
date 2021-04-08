import React from "react"
import { Row, Col } from "reactstrap"

const pageIntroImage = ({ src }) => (
  <>
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <img className="img-fluid" src={src} alt="" />
      </Col>
    </Row>
    <br />
    <br />
  </>
)

export default pageIntroImage;

