import { graphql } from "gatsby"
import React from "react"
import PageLayout from "../../components/pageLayout"
import PostCard from "../../components/postCard"
import Search from "../../svgs/search.svg"
import "./index.css"

const blog = ({ data }) => {
  return (
    <PageLayout title="블로그" historyBackPath="/">
      <div className="flex flex-col gap-2">
        <div>
          <span className="inline-block py-2 px-6 rounded-3xl bg-kwonBlown text-kwonBlownText">
            기술
          </span>
        </div>
        <div className="bg-gray400 text-gray600 font-bold flex gap-1 p-1 rounded-md">
          <Search />
          <input className="bg-transparent" placeholder="검색" />
        </div>
        <div className="flex flex-col gap-2">
          {data.allMarkdownRemark.nodes.map(
            ({ frontmatter: { slug, title, description, thumbnail } }) => (
              <PostCard
                linkTo={`/blog${slug}`}
                thumbnail={thumbnail.childImageSharp.gatsbyImageData}
                title={title}
                description={description}
              />
            )
          )}
        </div>
      </div>
    </PageLayout>
  )
}

export default blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          description
        }
      }
    }
  }
`
