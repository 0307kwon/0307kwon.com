import { graphql } from "gatsby"
import React from "react"
import PageLayout from "../../components/pageLayout"

const BlogPostTemplate = ({ data }) => {
  return (
    <PageLayout title="블로그">
      {data.markdownRemark.frontmatter.title}
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
