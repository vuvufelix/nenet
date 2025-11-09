import "./Produtos.css"
import CardItem from "../components/CardItem.jsx"
import { useQuery } from "@tanstack/react-query"
import Processando from "../components/Processando.jsx"
import FilterCategoryContext from "../context/filterContext.jsx"
import { useContext } from "react"

const TodosProdutos = () => {

    const FilterData = useContext(FilterCategoryContext)

    const { data, isLoading } = useQuery({
        queryKey: ["Products"],
        queryFn: async () => {
            const response = await fetch("http://localhost:8080/products")
            if(!response.ok) throw new Error("Erro ao buscar Produtos!")
            return response.json()
        }
    })

    return (
        <main>
            {isLoading ? <Processando/> : <CardItem products={data.length > 0 ? data : FilterData.filterValue}/>}
        </main>
    )
}

export default TodosProdutos