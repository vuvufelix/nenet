import "./ProdutoIndividual.css"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { FaCartShopping } from "react-icons/fa6";
import Processando from "../components/Processando.jsx"
import FilterCategoryContext from "../context/filterContext.jsx"
import { useContext } from "react"
import { useState, useEffect } from "react"

const ProdutoIndividual = () => {

    const { id } = useParams()
    const [addLocalStorage, setAddLocalStorage] = useState([])
    const FilterData = useContext(FilterCategoryContext)
    //const cont = useRef(addLocalStorage)

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("Products"))
        if(localStorageData) {
            setAddLocalStorage(localStorageData)
        }
    }, [])

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

    function addCartShopping() {
        let cont = 1
        const virifyIfExistProduct = addLocalStorage.find(product => product.id == data.id)
        
        if(virifyIfExistProduct) return

        if(data) {
           setAddLocalStorage((old) => [...old, data])
        } 
    }

    useEffect(() => {
        if(addLocalStorage.length > 0) {
            localStorage.setItem("Products", JSON.stringify(addLocalStorage))
            FilterData.setValueLocalStorage(addLocalStorage)
        }
    }, [addLocalStorage])

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
                            <button onClick={addCartShopping}><FaCartShopping/>adicionar ao carrinho</button>
                        </div>
                    </section>
                )
            }
        </main>
    )
}

export default ProdutoIndividual