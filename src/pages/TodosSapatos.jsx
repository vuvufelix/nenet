import "./Produtos.css"
import Processando from "../components/Processando.jsx"
import CardItem from "../components/CardItem.jsx"
import GlobalDataContext from "../context/DadosGlobais.jsx"
import { useContext } from "react"

const TodosSapatos = () => {
    const DataProject = useContext(GlobalDataContext)
    
    return (
        <main>
            {DataProject.filterValue.length < 1 ? <Processando/> : <CardItem products={DataProject.filterValue}/>}
        </main>
    )
}

export default TodosSapatos