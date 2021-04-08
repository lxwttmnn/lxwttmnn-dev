import React from "react"
import { Link } from "gatsby"
import Page from "../components/page"
import ImageSrc from "../images/index.svg"

export default function NotFoundPage({ children, location }) {
  return (
    <Page
      children={children}
      location={location}
      imageSrc={ImageSrc}
      headerText="Not found"
    >
      <p>
        The page you are looking for does not exist. Back to{" "}
        <Link to="/" className="text-decoration-none">
          home
        </Link>
        .
      </p>
    </Page>
  )
}
