import GlobalDataContext from "../context/DadosGlobais.jsx"
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext, useState, useEffect } from "react"
import "./Carrinho.css"

const Carrinho = () => {

    const AllData = useContext(GlobalDataContext)
    const [subtotalPrice, setSubtotalPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    function deleteProduct(id) {
        const deleted = AllData.valueLocalStorage.filter(product => product.id !== id)
        
        localStorage.setItem("Products", JSON.stringify(deleted))

        AllData.setValueLocalStorage(JSON.parse(localStorage.getItem("Products")))
    }

    function sumPrice() {
        let price = 0
        AllData.valueLocalStorage.map(product => price += product.price)
        setSubtotalPrice(price)
        setTotalPrice(price + 10)
    }

    useEffect(() => {
        sumPrice()
    }, [AllData.valueLocalStorage])

    async function handleCheckout(products) {
        if(subtotalPrice == 0) return 

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
            <span>Total ({AllData.valueLocalStorage.length} {AllData.valueLocalStorage.length <= 1 ? "produto" : "produtos"})</span>
            <div className="container-infoCar">
                <section className="allProduct-car">
                    {AllData.valueLocalStorage.map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name}/>
                            <div className="info">
                                <span>{product.name}</span>
                                <strong>usd {product.price}</strong>
                                <button onClick={() => deleteProduct(product.id)}><FaRegTrashCan/></button>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="finish-buy">
                    <h3>resumo do pedido</h3>
                    <div>
                        <span>Subtotal de produtos</span>
                        <span>usd {subtotalPrice}</span>
                    </div>
                    <div>
                        <span>Entrega</span>
                        <span>usd 10,00</span>
                    </div>
                    <div className="arc">
                        <strong>Total</strong>
                        <strong>usd {subtotalPrice > 0 ? totalPrice : 0}</strong>
                    </div>
                    <button onClick={() => handleCheckout(AllData.valueLocalStorage)}>finalizar a compra</button>
                </section>
            </div>
        </main>
    )
}

export default Carrinho