import { graphql } from "gatsby"
import * as React from "react"
import App from "../components/app"

import Seo from "../components/seo"

const Index = () => {
  return (
    <div className="flex flex-col h-full px-[5%]">
      <div className="h-full w-full relative">
        <App
          name={"About Me"}
          img={{
            name: "about-me.png",
            alt: "Sejin's Character",
          }}
          linkTo="/"
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
          linkTo={"/blog"}
        />
        <App
          name={"Gallery"}
          img={{
            name: "gallery.png",
            alt: "Gallery",
          }}
          displayName={false}
          linkTo={"/gallery"}
        />
      </div>
    </div>
  )
}

export default Index

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
