import React, { ReactNode } from "react"

interface Props {
  name: string
  children: ReactNode
}

const App = ({ name, children }: Props) => {
  return (
    <div className="text-sm text-white">
      <div className="overflow-hidden flex flex-col bg-gray400 w-16 h-16 rounded-2xl">
        {children}
      </div>
      {name}
    </div>
  )
}

export default App
