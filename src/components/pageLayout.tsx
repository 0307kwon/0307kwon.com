import React from "react"

interface Props {
  title: string
}

const PageLayout = ({ title }: Props) => {
  return <div>{title}</div>
}

export default PageLayout
