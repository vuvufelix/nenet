import { createContext, useState } from "react"

const GlobalDataContext = createContext()

export default GlobalDataContext

export function GlobalDataProvider({ children }) {

    const [ filterValue, setFilterValue ] = useState([])
    const [ valueLocalStorage, setValueLocalStorage ] = useState([])

    return (
        <GlobalDataContext.Provider value={{filterValue, setFilterValue, valueLocalStorage, setValueLocalStorage}}>
            { children }
        </GlobalDataContext.Provider>
    )
}