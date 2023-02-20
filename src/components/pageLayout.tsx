import React from "react"

interface Props {
  title: string
}

const PageLayout = ({ title }: Props) => {
  return (
    <div>
      <div className="bg-white absolute w-full h-full top-0 left-0" />
      <div className="relative z-10">{title}</div>
    </div>
  )
}

export default PageLayout
