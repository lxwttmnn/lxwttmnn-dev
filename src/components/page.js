import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/pageHeader"
import PageIntroImage from "../components/pageIntroImage"
import PageContent from "../components/pageContent"

const page = ({ children, location, imageSrc, headerText }) => (
  <Layout location={location}>
    <PageIntroImage src={imageSrc} />
    <PageHeader text={headerText} />
    <PageContent children={children} />
  </Layout>
)

export default page
