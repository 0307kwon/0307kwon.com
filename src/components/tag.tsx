import React, { MouseEventHandler } from "react"

interface Props {
  name: string
  onClick: MouseEventHandler<HTMLSpanElement>
  active?: boolean
}

const Tag = ({ name, onClick, active = false }: Props) => {
  return (
    <span
      onClick={onClick}
      className={`inline-block py-2 px-4 rounded-3xl transition-all select-none 
      hover:bg-kwonBlown hover:text-kwonBlownText border-solid border-2 border-gray400
      ${active ? "bg-kwonBlown text-kwonBlownText" : ""}`}
    >
      {name}
    </span>
  )
}

export default Tag
