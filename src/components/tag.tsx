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
      className={`inline-block py-1 rounded-lg transition-all select-none text-sm text-kwonBlown cursor-pointer
      hover:underline hover:font-bold
      ${active ? "underline font-bold" : ""}`}
    >
      #{name}
    </span>
  )
}

export default Tag
