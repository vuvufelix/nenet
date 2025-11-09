import "./Produtos.css"
import CardItem from "../components/CardItem.jsx"
import { useEffect, useState } from "react"

const TodosProdutos = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/products")
        .then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setData(data)
        })
    }, [])

    return (
        <main>
            <CardItem products={data}/>
        </main>
    )
}

export default TodosProdutos