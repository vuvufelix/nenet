import "./Produtos.css"
import Processando from "../components/Processando.jsx"
import CardItem from "../components/CardItem.jsx"
import GlobalDataContext from "../context/DadosGlobais.jsx"
import { useContext } from "react"

const TodasBolsas = () => {

    const FilterData = useContext(GlobalDataContext)

    return (
        <main>
            {
                FilterData.filterValue.length < 1 ? 
                <Processando/> 
                : 
                <CardItem 
                    products={FilterData.filterValue}
                />
            }
        </main>
    )
}

export default TodasBolsas