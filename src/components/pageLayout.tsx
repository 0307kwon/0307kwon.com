import { navigate } from "gatsby"
import React, { ReactNode } from "react"
import Left from "../svgs/left.svg"

interface Props {
  title: string
  children: ReactNode
  historyBackInteraction: { path: string } | { onClick: () => void }
  className?: string
  zIndex?: number
}

const PageLayout = ({
  title,
  children,
  historyBackInteraction,
  className,
  zIndex,
}: Props) => {
  return (
    <>
      <div
        className={`text-gray600 overflow-y-auto h-full ${className ?? ""}`}
        style={{ zIndex }}
      >
        <div
          className="bg-white absolute w-full h-full top-0 left-0 z-[-1]"
          style={{
            zIndex,
          }}
        />
        <div className="relative z-10 pt-2 flex flex-col gap-3 max-w-[700px] mx-auto">
          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                if ("path" in historyBackInteraction) {
                  navigate(historyBackInteraction.path)
                  return
                }

                if ("onClick" in historyBackInteraction) {
                  historyBackInteraction.onClick()
                  return
                }

                navigate(-1)
              }}
            >
              <Left />
            </div>
            <h1 className="text-xl">{title}</h1>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default PageLayout
