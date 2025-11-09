import "./Produtos.css"
import CardItem from "../components/CardItem.jsx"
import { useQuery } from "@tanstack/react-query"
import Processando from "../components/Processando.jsx"

const TodosProdutos = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["Products"],
        queryFn: async () => {
            const response = await fetch("http://localhost:8080/products")
            if(!response.ok) throw new Error("Erro ao buscar Produtos!")
            return response.json()
        }
    })

    if(isLoading) return <Processando/>

    return (
        <main>
            {isLoading ? <Processando/> : <CardItem products={data}/>}
        </main>
    )
}

export default TodosProdutos