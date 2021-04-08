import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteUrl
            title
            description
            jobTitle
            navigationLinks {
              url
              name
            }
            contacts {
              name
              url
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}
