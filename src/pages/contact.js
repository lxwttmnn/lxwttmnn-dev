import React from "react"
import Page from "../components/page"
import ImageSrc from "../images/contact.svg"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function ContactPage({ children, location }) {
  const { jobTitle, contacts } = useSiteMetadata()

  return (
    <Page
      children={children}
      location={location}
      imageSrc={ImageSrc}
      headerText="Contact"
    >
      <p>
        I’m currently accepting contract work as a {jobTitle}. Send me a message
        and I'll come back to you as soon as I can.
      </p>
      <ul className="list-unstyled">
        {contacts.map(contact => (
          <li key={contact.name}>
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              {contact.name}
            </a>
          </li>
        ))}
      </ul>
    </Page>
  )
}
