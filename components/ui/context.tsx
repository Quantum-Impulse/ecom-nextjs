import { createContext, FC, useContext, useState } from "react"


const UIContext = createContext<{[key: string]: any}>({
  uiState: "defaultState"
})

interface Props {
    children: any;
  } 

export const UIProvider: FC<Props> = ({children}) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const uiState = {
        isSidebarOpen,
        setSidebarOpen
    }

    return (
        <UIContext.Provider value={uiState}>
          {children}
        </UIContext.Provider>
    )
}

export const useUI = () => {
    const context = useContext(UIContext)
    return context
}