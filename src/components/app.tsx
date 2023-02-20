import { graphql, navigate, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useMemo, useRef, useState } from "react"

interface Props {
  name: string
  img: {
    name: string
    alt: string
  }
  linkTo: string
  displayName?: boolean
}

const App = ({ name, img, linkTo, displayName = true }: Props) => {
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
  const ref = useRef<HTMLDivElement>(null)
  const [animation, setAnimation] = useState({
    activate: false,
    transformOrigin: {
      x: 50,
      y: 50,
    },
  })

  const onNavigate = () => {
    // 애니메이션 후에 이동.
    setTimeout(() => {
      navigate(linkTo)
    }, 500)
    setAnimation({
      ...animation,
      activate: true,
    })
  }

  useEffect(() => {
    // transform origin 계산
    const calculate = () => {
      const $mainDiv = document.getElementById("layoutMain")

      if (!$mainDiv) return
      if (!ref.current) return

      const [centerX, centerY] = [window.innerWidth / 2, window.innerHeight / 2]
      const [appX, appY] = [
        ref.current.getBoundingClientRect().x,
        ref.current.getBoundingClientRect().y,
      ]
      const [appWidth, appHeight] = [
        ref.current.offsetWidth,
        ref.current.offsetHeight,
      ]

      // 중앙으로부터 얼마나 벗어나있는지 계산.
      // x가 양수면 왼쪽 y가 양수면 위쪽
      const offsetToCenter = [
        centerX - (appX + appWidth / 2),
        centerY - (appY + appHeight / 2),
      ]

      const x = 50 - (offsetToCenter[0] / centerX) * 50
      const y = 50 - (offsetToCenter[1] / centerY) * 50

      setAnimation(prev => ({
        ...prev,
        transformOrigin: {
          x: Math.floor(x * 10) / 10,
          y: Math.floor(y * 10) / 10,
        },
      }))
    }

    calculate()

    window.onresize = () => {
      calculate()
    }
  }, [])

  return (
    <div
      ref={ref}
      onClick={onNavigate}
      className={`relative text-sm text-white h-fit w-fit flex flex-col items-center
    sm:text-base
    `}
    >
      <div
        className={`overflow-hidden flex flex-col bg-gray400 w-16 h-16 mb-1 rounded-2xl relative
        sm:w-20 sm:h-20
        ${
          animation.activate
            ? "animate-[activateApp_0.8s_ease-in_forwards] z-30"
            : ""
        }
        `}
        style={{
          transformOrigin: `${animation.transformOrigin.x}% ${animation.transformOrigin.y}%`,
        }}
      >
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
