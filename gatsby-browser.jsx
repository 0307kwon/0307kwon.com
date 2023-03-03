// custom typefaces
import "@fontsource/merriweather"
import "@fontsource/montserrat/variable.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"
import React from "react"
import Layout from "./src/components/layout"
import ContextModal from "./src/context/contextModal"
import "./src/global.css"

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <ContextModal>{element}</ContextModal>
    </Layout>
  )
}
