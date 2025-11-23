import Processando from "../components/Processando.jsx"
import { useQuery } from "@tanstack/react-query"
import ValorDaPesquisa from "../components/ValorDaPesquisa.jsx"
import "./ProdutoPesquisado.css"
import "../components/CardItem.css"
import { useParams } from "react-router-dom"

const ProdutoPesquisado = () => {

    const { name } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ["Products"],
        queryFn: async () => {
            const response = await fetch(`https://ecommerceapi-8obj.onrender.com/product/search/${name}`)
            if(!response.ok) throw new Error("Erro ao buscar Produtos!")
            return response.json()
        }
    })

    return (
        <main className="container-search">
            <h2>Resultado da pesquisa:</h2>
            {data.length <= 0 && <h3>Não existe este produto na nossa loja</h3>}
            <div className="result">
                {
                    isLoading ? 
                    <Processando/>
                    :
                    <ValorDaPesquisa 
                        products={data} 
                    />
                }
            </div>
        </main>
    )
}

export default ProdutoPesquisado