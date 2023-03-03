import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { MouseEventHandler } from "react"

interface Props {
  image: IGatsbyImageData
  alt: string
  onClick: MouseEventHandler<HTMLDivElement>
}

const PhotoCard = ({ image, alt, onClick }: Props) => {
  return (
    <div
      className="relative w-full pt-[100%] overflow-hidden"
      onClick={onClick}
    >
      <GatsbyImage
        image={image}
        alt={alt}
        className="absolute h-full top-0 left-0"
      />
    </div>
  )
}

export default PhotoCard
