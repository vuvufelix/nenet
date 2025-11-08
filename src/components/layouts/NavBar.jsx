import "./NavBar.css"
import { Link } from "react-router-dom"

import { useState } from "react"

const NavBar = () => {
    const [value, setValue] = useState(false)

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

    }

    return (
        <nav>
            <ul>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/"}>TODOS OS PRODUTOS</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/camisetas"}>CAMISETAS</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/tenis"}>TÉNIS</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/sapatos"}>SAPATOS</Link></li>
                <li><Link onClick={(e) => funcNavToggle(e)} to={"/bolsas"}>BOLSAS</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar