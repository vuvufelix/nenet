import "./NavBar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import FilterCategoryContext from "../../context/filterContext.jsx"

import { useState } from "react"

const NavBar = () => {
    const [value, setValue] = useState(false)

    const FilterData = useContext(FilterCategoryContext)

    function funcNavToggle(event) {

        setValue(false)

        Array.from(document.getElementsByTagName("a")).forEach(element => {
            if(element.className == "toggle") {
                element.classList.remove("toggle")
            }
        })
        
        setValue(true)

        if(value) {
            if(event.target.innerHTML) {
                event.target.classList.add("toggle")
            }
        }

        fetch(`http://localhost:8080/products/${event.target.innerHTML !== "TODOS OS PRODUTOS" ? event.target.innerHTML : ""}`)
        .then(res => {
            return res.json()
        }).then(data => {
            FilterData.setFilterValue(data)
            console.log(data)
        }).catch(error => {
            console.log(error)
        })

    }

    return (
        <nav>
            <ul>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/"}>TODOS OS PRODUTOS</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/camisetas"}>CAMISA</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/tenis"}>TENIS</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/sapatos"}>SAPATO</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/bolsas"}>BOLSA</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar