import { graphql } from "gatsby"
import * as React from "react"
import App from "../components/app"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="flex flex-col h-full">
        <div className="h-full w-full">
          <App
            name={"About Me"}
            img={{
              name: "about-me.png",
              alt: "Sejin's Character",
            }}
          />
        </div>
        <div
          className="relative flex gap-2 py-3 px-5 w-fit self-center
        sm:px-16
        "
        >
          <div className="bg-white opacity-50 absolute w-full h-full top-0 left-0 rounded-t-2xl" />
          <App
            name={"Blog"}
            img={{
              name: "message.png",
              alt: "message bubble",
            }}
            displayName={false}
          />
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
