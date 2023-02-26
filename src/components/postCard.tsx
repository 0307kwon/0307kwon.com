import { navigate } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

interface Props {
  linkTo: string
  thumbnail: IGatsbyImageData
  title: string
  description: string
}

const PostCard = ({ linkTo, thumbnail, title, description }: Props) => {
  const onLinkTo = () => {
    navigate(linkTo)
  }

  return (
    <article
      className="bg-gray400 rounded-md flex h-24 p-2 gap-3 postCard"
      onClick={onLinkTo}
    >
      <div className="bg-white min-w-[80px] w-[80px] rounded-md relative overflow-hidden">
        <div className="w-full pt-[100%]" />
        <GatsbyImage
          image={thumbnail}
          alt={`${title} thumbnail`}
          className="absolute w-full h-full top-0"
        />
      </div>
      <div className="flex flex-col relative w-full">
        <h3 className="text-lg">{title}</h3>
        <p className="block text-sm max-h-[60%] w-full overflow-hidden text-ellipsis break-keep">
          {description}
        </p>
      </div>
    </article>
  )
}

export default PostCard
