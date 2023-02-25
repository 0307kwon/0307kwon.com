import { Link } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

interface Props {
  linkTo: string
  thumbnail: IGatsbyImageData
  title: string
  description: string
}

const PostCard = ({ linkTo, thumbnail, title, description }: Props) => {
  console.log(linkTo)
  return (
    <article className="bg-gray400 rounded-md flex h-24 p-2 gap-3">
      <div className="bg-white min-w-[80px] w-[80px] rounded-md relative overflow-hidden">
        <div className="w-full pt-[100%]" />
        <GatsbyImage
          image={thumbnail}
          alt={`${title} thumbnail`}
          className="absolute w-full h-full top-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="flex flex-col relative w-full">
        <Link to={linkTo}>
          <h3 className="text-lg">{title}</h3>
          <p className="block text-sm max-h-[60%] w-full overflow-hidden text-ellipsis break-keep">
            {description}
          </p>
        </Link>
      </div>
    </article>
  )
}

export default PostCard
