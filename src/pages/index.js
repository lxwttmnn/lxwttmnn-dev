import React from "react"
import { Link } from "gatsby"
import { Button } from "reactstrap"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Page from "../components/page"
import ImageSrc from "../images/index.svg"

export default function IndexPage({ children, location }) {
  const { jobTitle } = useSiteMetadata()

  return (
    <Page
      children={children}
      location={location}
      imageSrc={ImageSrc}
      headerText="Hi, I'm Alex."
    >
      <p>
        I help individuals and companies of any size to stay competitive in
        today's fast-changing world through modern technology and quality
        software. I'm a highly experienced {jobTitle} with a passion for new
        technology and continual learning. Let's get in touch to discuss how we
        can work together.
      </p>
      <p>
        <Button outline color="primary" className="btn-lg">
          <Link to="/contact/" className="text-primary text-decoration-none">
            Get in touch
          </Link>
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button outline color="primary" className="btn-lg">
          <Link to="/contact/" className="text-primary text-decoration-none">
            Request CV
          </Link>
        </Button>
      </p>
    </Page>
  )
}
