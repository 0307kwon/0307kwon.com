import { graphql, navigate } from "gatsby"
import React, { useMemo } from "react"
import PageLayout from "../components/pageLayout"
import PostCard from "../components/postCard"
import Tag from "../components/tag"
import Search from "../svgs/search.svg"
import "./blogPostList.css"

const blog = ({ data }) => {
  const currentTagFilter = useMemo(
    () => window.location.pathname.match(/tag\/([a-zA-Z\-]+)\//)?.[1] ?? "all",
    []
  )

  const onToggleTag = (tagName: string) => () => {
    if (currentTagFilter === tagName) {
      navigate("/blog")
      return
    }

    navigate(`/blog/tag/${tagName}`)
  }

  return (
    <PageLayout title="블로그" historyBackPath="/">
      <div className="flex flex-col gap-2">
        <div>
          {data.tags.group.map(i => (
            <Tag
              name={i.tag}
              active={currentTagFilter === i.tag}
              onClick={onToggleTag(i.tag)}
            />
          ))}
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
  query ($tags: [String!]!) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tag: { in: $tags } } }
    ) {
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
    tags: allMarkdownRemark {
      group(field: { frontmatter: { tag: SELECT } }) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
