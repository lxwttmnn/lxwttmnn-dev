import React from "react"
import { Link } from "gatsby"
import Page from "../components/page"
import ImageSrc from "../images/about.svg"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function AboutPage({ children, location }) {
  const { jobTitle } = useSiteMetadata()

  return (
    <Page
      children={children}
      location={location}
      imageSrc={ImageSrc}
      headerText="About"
    >
      <p>
        Hi, my name is Alexander Wittmann. I'm a passionate {jobTitle} with more
        than {new Date().getFullYear() - 2010} years of experience.
      </p>
      <p>
        I've been working on various projects, from single page applications to
        complex data-intensive web applications, for small and large companies,
        and I am always looking for the next challenge to help individuals or
        companies solve complex problems in the simplest possible way.
      </p>
      <p>
        If you're looking for someone who is solution-oriented, focused, highly
        reliable, absolutely self-driven and constantly pushing himself to
        improve and learn new things, and most important, passionate about what
        he is doing, then you're at the right place.
      </p>
      <p>
        Besides applying clean code principles, I consider your project as my
        own and try to improve it, make suggestions and enhancements, while
        keeping the communication clear and effective and the quality high.
      </p>
      <p>
        Feel free to{" "}
        <Link to="/contact/" className="text-decoration-none">
          contact
        </Link>{" "}
        me if you want to discuss potential projects or need any help. I will
        get back to you as soon as I can.
      </p>
    </Page>
  )
}
