import "./Produtos.css"
import Processando from "../components/Processando.jsx"
import CardItem from "../components/CardItem.jsx"
import FilterCategoryContext from "../context/filterContext.jsx"
import { useContext } from "react"

const TodosTenis = () => {
    const FilterData = useContext(FilterCategoryContext)
    
    return (
        <main>
            {FilterData.filterValue.length < 1 ? <Processando/> : <CardItem products={FilterData.filterValue}/>}
        </main>
    )
}

export default TodosTenis