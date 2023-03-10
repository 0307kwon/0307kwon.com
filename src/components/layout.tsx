import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { useEffect, useRef } from "react"
import Battery from "../svgs/battery.svg"
import Wifi from "../svgs/wifi.svg"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const timeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const evaluateTime = () => {
      const now = new Date()

      if (!timeRef.current) return

      const hours = "0" + now.getHours()
      const minutes = "0" + now.getMinutes()

      timeRef.current.innerText = `${hours.slice(-2)}:${minutes.slice(-2)}`
    }

    evaluateTime()

    setInterval(() => {
      evaluateTime()
    }, 1000)
  }, [])

  return (
    <div
      className="flex justify-center items-center w-full h-screen
      sm:p-5
      "
      data-is-root-path={isRootPath}
    >
      <div
        className="relative max-w-md w-full h-full p-3 bg-black rounded-[40px] flex justify-center items-center
        sm:max-w-none sm:p-6"
      >
        <div
          className="relative overflow-hidden h-full w-full rounded-[40px]
        "
        >
          <StaticImage
            className="blur-sm absolute w-full h-full top-0 left-1/2 -translate-x-1/2"
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
            src="../images/bg-img.jpeg"
            alt=""
          />
          <div className="relative z-10 h-full flex flex-col items-center px-2">
            <header
              className="absolute w-full flex justify-center px-8 top-2 z-50
              sm:max-w-2xl sm:top-4"
            >
              <h1 className="w-full bg-black text-white rounded-2xl flex justify-between px-4 py-1">
                <span ref={timeRef}>11:12</span>
                <Link to="/" className="font-bold">
                  0307kwon
                </Link>
                <div className="flex gap-1">
                  <Wifi />
                  <Battery />
                </div>
              </h1>
            </header>
            <main
              id={"layoutMain"}
              className="h-full w-full pt-14 
              sm:pt-16"
            >
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
