import "./ProdutoIndividual.css"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { FaCartShopping } from "react-icons/fa6";
import Processando from "../components/Processando.jsx"

const ProdutoIndividual = () => {

    const { id } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ["Products"],
        queryFn: async () => {
            const response = await fetch(`http://localhost:8080/product/${id}`)
            if(!response.ok) throw new Error("Erro ao buscar Produtos!")
            return response.json()
        }
    })


    Array.from(document.getElementsByTagName("a")).forEach(element => {
        if(element.className == "toggle") {
            element.classList.remove("toggle")
        }
    })

    console.log(data)

    return (
        <main>
            {isLoading ? 
                <Processando/> 
                : (
                    <section className="individual-data">
                        <img src={data.image} alt={data.name}/>
                        <div className="container-details">
                            <small>{data.category}</small>
                            <div className="name-price">
                                <span>{data.name}</span>
                                <strong>usd {data.price}</strong>
                            </div>
                            <div className="description">
                                <span>DESCRIÇÃO</span>
                                <p>{data.description}</p>
                            </div>
                            <button><FaCartShopping/>ADICIONAR AO CARRINHO</button>
                        </div>
                    </section>
                )
            }
        </main>
    )
}

export default ProdutoIndividual