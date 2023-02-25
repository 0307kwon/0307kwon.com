import { navigate } from "gatsby"
import React, { ReactNode } from "react"
import Left from "../svgs/left.svg"

interface Props {
  title: string
  children: ReactNode
  historyBackPath?: string
}

const PageLayout = ({ title, children, historyBackPath }: Props) => {
  return (
    <>
      <div className="bg-white absolute w-full h-full top-0 left-0" />
      <div className="relative text-gray600 h-full">
        <div className="relative z-10 pt-2 flex flex-col gap-3 overflow-y-auto h-full">
          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                if (historyBackPath) {
                  navigate(historyBackPath)
                  return
                }
                navigate(-1)
              }}
            >
              <Left />
            </div>
            <h1 className="text-2xl">{title}</h1>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default PageLayout
