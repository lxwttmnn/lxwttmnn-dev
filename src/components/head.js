import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Helmet } from "react-helmet"

import favicon16 from "../images/favicon-16x16.png"
import favicon32 from "../images/favicon-32x32.png"

export default function Head() {
  const { title, description, siteUrl } = useSiteMetadata()

  return (
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="shortcut icon" type="image/png" href={favicon32} />
    </Helmet>
  )
}
