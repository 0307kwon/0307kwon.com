import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import React, { useMemo } from "react"
import PageLayout from "../../components/pageLayout"
import PhotoCard from "../../components/photoCard"
import { useContextModal } from "../../context/contextModal"

const Photo = ({ data }) => {
  const photos: {
    title: string
    images: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }[]
  }[] = useMemo(
    () =>
      data.allFile.nodes.map(n => {
        return n.childMarkdownRemark.frontmatter
      }),
    []
  )
  const { openModal } = useContextModal()

  return (
    <PageLayout title="Photos 📸" historyBackInteraction={{ path: "/" }}>
      <div className="grid grid-cols-3">
        {photos.map(({ title, images }) => {
          return (
            <PhotoCard
              image={images[0].childImageSharp.gatsbyImageData}
              alt={title}
              onClick={() => {
                openModal(
                  title,
                  <>
                    <div>sss</div>
                  </>
                )
              }}
            />
          )
        })}
      </div>
    </PageLayout>
  )
}

export default Photo

export const pageQuery = graphql`
  query {
    allFile(
      limit: 2000
      sort: { childMarkdownRemark: { frontmatter: { date: DESC } } }
      filter: { sourceInstanceName: { eq: "photo" }, name: { eq: "index" } }
    ) {
      nodes {
        name
        childMarkdownRemark {
          frontmatter {
            title
            slug
            images {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
