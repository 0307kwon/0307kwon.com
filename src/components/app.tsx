import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"

interface Props {
  name: string
  img: {
    name: string
    alt: string
  }
  displayName?: boolean
}

const App = ({ name, img, displayName = true }: Props) => {
  const data = useStaticQuery(graphql`
    query Query {
      allImageSharp {
        edges {
          node {
            id
            fixed {
              originalName
            }
            gatsbyImageData
          }
        }
      }
    }
  `)
  const gatsbyImageData = useMemo(() => {
    const targetImg = data.allImageSharp.edges.find(
      e => e.node.fixed.originalName === img.name
    ).node.gatsbyImageData

    return getImage(targetImg)
  }, [data])

  return (
    <div className="relative text-sm text-white h-fit">
      <div className="overflow-hidden flex flex-col bg-gray400 w-16 h-16 mb-1 rounded-2xl">
        {gatsbyImageData && (
          <GatsbyImage image={gatsbyImageData} alt={img.alt} />
        )}
      </div>
      <p
        style={
          displayName
            ? {}
            : {
                opacity: 0,
                position: "absolute",
                top: 0,
                left: 0,
              }
        }
      >
        {name}
      </p>
    </div>
  )
}

export default App
