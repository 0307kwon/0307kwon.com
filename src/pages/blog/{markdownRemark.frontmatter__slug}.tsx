import { graphql, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import PageLayout from "../../components/pageLayout"
import Tag from "../../components/tag"
import "./markdown.css"

const BlogPostTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, thumbnail, date, tag },
    },
  } = data

  return (
    <PageLayout title={title} historyBackPath="/blog">
      <article
        className="markdown px-4"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="flex flex-col pb-3 gap-1">
          <span className="self-end">{date}</span>
          <div>
            {tag.map(t => (
              <Tag
                name={t}
                onClick={() => {
                  navigate(`/blog/tag/${t}`)
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="relative w-full rounded-2xl overflow-hidden mb-6 max-w-[700px] mx-auto"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
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
          className="pb-10"
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
        tag
      }
    }
  }
`
