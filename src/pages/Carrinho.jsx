import FilterCategoryContext from "../context/filterContext.jsx"
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react"
import "./Carrinho.css"

const Carrinho = () => {

    const FilterData = useContext(FilterCategoryContext)

    function deleteProduct(id) {
        const deleted = FilterData.valueLocalStorage.filter(product => product.id !== id)
        
        localStorage.setItem("Products", JSON.stringify(deleted))

        FilterData.setValueLocalStorage(JSON.parse(localStorage.getItem("Products")))
    }

    async function handleCheckout(products) {
        let AllProducts = products.map(product => product)

        const res = await fetch("http://localhost:8080/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ AllProducts })
        })

        if (!res.ok) {
            console.error("Erro ao criar a sessão de checkout no backend. Status:", res.status)
            alert("Erro no servidor ao iniciar o pagamento.")
            return
        }

        const session = await res.json()
        
        window.location.href = session.url
        
    }


    return (
        <main className="car-container">
            <h2>seu carrinho</h2>
            <span>Total ({FilterData.valueLocalStorage.length} produtos)</span>
            <div className="container-infoCar">
                <div className="allProduct-car">
                    {FilterData.valueLocalStorage.map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name}/>
                            <div className="info">
                                <span>{product.name}</span>
                                <strong>usd {product.price}</strong>
                                <button onClick={() => deleteProduct(product.id)}><FaRegTrashCan/></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="finish-buy">
                    <h3>resumo do pedido</h3>
                    <div>
                        <span>Subtotal de produtos</span>
                        <span>usd </span>
                    </div>
                    <div>
                        <span>Entrega</span>
                        <span>usd 10,00</span>
                    </div>
                    <hr/>
                    <div>
                        <strong>Total</strong>
                        <strong>usd </strong>
                    </div>
                    <button onClick={() => handleCheckout(FilterData.valueLocalStorage)}>finalizar a compra</button>
                </div>
            </div>
        </main>
    )
}

export default Carrinho