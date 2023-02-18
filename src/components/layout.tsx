import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="w-full bg-black text-white rounded-2xl flex justify-between px-4 py-1">
        <span>11:12</span>
        <Link to="/">{title}</Link>
        <span>battery</span>
      </h1>
    )
  } else {
    header = (
      <Link className="" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div
      className="flex justify-center items-center w-full h-screen"
      data-is-root-path={isRootPath}
    >
      <div className="relative max-w-md w-full h-full p-3 bg-black rounded-[40px] flex justify-center items-center">
        <div className="relative overflow-hidden h-full w-full rounded-[40px] pt-2 px-4">
          <StaticImage
            className="blur-sm absolute w-full h-full top-0 left-1/2 -translate-x-1/2"
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
            src="../images/bg-img.jpeg"
            alt=""
          />
          <div className="relative z-10 h-full flex flex-col">
            <header className="w-full flex justify-center px-5 mb-4">
              {header}
            </header>
            <main className="relative h-full">{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
