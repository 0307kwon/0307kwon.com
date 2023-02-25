import { graphql } from "gatsby"
import React from "react"
import PageLayout from "../../components/pageLayout"
import "./markdown.css"

const BlogPostTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, date },
    },
  } = data

  return (
    <PageLayout title={title} historyBackPath="/blog">
      <article
        className="h-full markdown"
        itemScope
        itemType="http://schema.org/Article"
      >
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
        slug
        title
      }
    }
  }
`
