import React, { ReactNode, useContext, useState } from "react"
import PageLayout from "../components/pageLayout"

interface ModalControl {
  openModal: (title: string, contents: ReactNode) => void
  closeModal: () => void
}

const Context = React.createContext<ModalControl | null>(null)

interface Props {
  children: ReactNode
}

const ContextModal = ({ children }: Props) => {
  const [modalControl, setModalControl] = useState<{
    isOpen: boolean
    title: string
    contents: ReactNode
  }>({
    isOpen: false,
    title: "",
    contents: undefined,
  })

  const openModal = (title: string, contents: ReactNode) => {
    setModalControl(prev => ({
      ...prev,
      title,
      contents,
      isOpen: true,
    }))
  }

  const closeModal = () => {
    setModalControl(prev => ({
      ...prev,
      isOpen: false,
    }))
  }

  return (
    <Context.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {children}(
      <PageLayout
        title={modalControl.title}
        className={`!absolute top-0 left-0 right-0 bottom-0 pt-14 px-2 opacity-0 translate-x-full transition-all ${
          modalControl.isOpen ? "translate-x-0 opacity-100" : ""
        }`}
        zIndex={10}
        historyBackInteraction={{
          onClick: () => {
            setModalControl(prev => ({ ...prev, isOpen: false }))
          },
        }}
      >
        {modalControl.contents}
      </PageLayout>
      )
    </Context.Provider>
  )
}

export default ContextModal

export const useContextModal = () => {
  const context = useContext(Context)

  if (context === null) {
    throw new Error()
  }

  return context
}
