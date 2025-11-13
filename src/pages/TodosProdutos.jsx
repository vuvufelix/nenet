import "./Produtos.css"
import CardItem from "../components/CardItem.jsx"
import { useQuery } from "@tanstack/react-query"
import Processando from "../components/Processando.jsx"
import GlobalDataContext from "../context/DadosGlobais.jsx"
import { useContext } from "react"

const TodosProdutos = () => {

    const DataProject = useContext(GlobalDataContext)

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
            {isLoading ? <Processando/> : <CardItem products={data.length > 0 ? data : DataProject.filterValue}/>}
        </main>
    )
}

export default TodosProdutos