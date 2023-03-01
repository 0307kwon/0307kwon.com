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
      className={`inline-block py-1 px-3 rounded-lg transition-all select-none border-gray400 border-solid border-2 text-sm
      hover:bg-kwonBlown hover:text-kwonBlownText hover:border-kwonBlown 
      ${active ? "bg-kwonBlown text-kwonBlownText border-kwonBlown" : ""}`}
    >
      {name}
    </span>
  )
}

export default Tag
