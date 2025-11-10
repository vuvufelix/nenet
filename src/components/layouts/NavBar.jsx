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

        if(event.target.innerHTML !== "TODOS OS PRODUTOS") {
            fetch(`http://localhost:8080/products/${event.target.innerHTML}`)
            .then(res => {
                return res.json()
            }).then(data => {
                FilterData.setFilterValue(data)
                console.log(data)
            }).catch(error => {
                console.log(error)
            })
        }

        if(event.target.innerHTML == "TODOS OS PRODUTOS") {
            fetch("http://localhost:8080/products")
            .then(res => {
                return res.json()
            }).then(data => {
                FilterData.setFilterValue(data)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    return (
        <nav>
            <ul>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/"}>todos os produtos</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/camisetas"}>camisa</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/tenis"}>tenis</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/sapatos"}>sapato</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/bolsas"}>bolsa</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar