import { Link } from "gatsby"
import * as React from "react"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="w-full bg-black text-white rounded-2xl flex justify-between px-3">
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
        <div className="h-full w-full rounded-[40px] pt-2 px-3 bg-white">
          <header className="w-full flex justify-center px-5 mb-2">
            {header}
          </header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout
