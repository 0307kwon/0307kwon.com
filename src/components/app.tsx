import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"

interface Props {
  name: string
  img: {
    name: string
    alt: string
  }
}

const App = ({ name, img }: Props) => {
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
    <div className="text-sm text-white">
      <div className="overflow-hidden flex flex-col bg-gray400 w-16 h-16 rounded-2xl">
        {gatsbyImageData && (
          <GatsbyImage image={gatsbyImageData} alt={img.alt} />
        )}
      </div>
      {name}
    </div>
  )
}

export default App
