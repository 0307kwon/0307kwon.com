import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import PageLayout from "../../components/pageLayout"
import PhotoCard from "../../components/photoCard"

const Photo = ({ data }) => {
  const photos: {
    title: string
    images: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }[]
  }[] = data.allFile.nodes.map(n => {
    console.log(n)
    return n.childMarkdownRemark.frontmatter
  })

  return (
    <PageLayout title="Photos 📸" historyBackPath="/">
      <div className="grid grid-cols-3">
        {photos.map(({ title, images }) => {
          return (
            <PhotoCard
              image={images[0].childImageSharp.gatsbyImageData}
              alt={title}
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
