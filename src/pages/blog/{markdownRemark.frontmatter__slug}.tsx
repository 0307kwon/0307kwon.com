import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import PageLayout from "../../components/pageLayout"
import "./markdown.css"

const BlogPostTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, thumbnail, date },
    },
  } = data

  return (
    <PageLayout title={title} historyBackPath="/blog">
      <article
        className="h-full markdown"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="relative w-full rounded-2xl overflow-hidden mb-3 max-w-[700px] mx-auto">
          <div className="w-full pt-[50%]" />
          <GatsbyImage
            image={thumbnail.childImageSharp.gatsbyImageData}
            alt={`${title} thumbnail`}
            className="absolute w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
          className="pb-10 px-2"
        />
      </article>
    </PageLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        slug
        title
      }
    }
  }
`
