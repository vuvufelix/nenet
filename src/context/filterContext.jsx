import { createContext, useState } from "react"

const FilterCategoryContext = createContext()

export default FilterCategoryContext

export function FilterCategoryProvider({ children }) {

    const [ filterValue, setFilterValue ] = useState([])

    return (
        <FilterCategoryContext.Provider value={{filterValue, setFilterValue}}>
            { children }
        </FilterCategoryContext.Provider>
    )
}