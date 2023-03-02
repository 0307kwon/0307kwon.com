import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

interface Props {
  image: IGatsbyImageData
  alt: string
}

const PhotoCard = ({ image, alt }: Props) => {
  return (
    <div className="relative w-full pt-[100%] overflow-hidden">
      <GatsbyImage
        image={image}
        alt={alt}
        className="absolute h-full top-0 left-0"
      />
    </div>
  )
}

export default PhotoCard
