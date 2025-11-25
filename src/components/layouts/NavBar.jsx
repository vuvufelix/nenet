import "./NavBar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import GlobalDataContext from "../../context/DadosGlobais.jsx"
import { FaShirt } from "react-icons/fa6"
import { PiSneakerFill } from "react-icons/pi"
import { GiRunningShoe } from "react-icons/gi"
import { FaShoppingBag } from "react-icons/fa"
import { FaDumpster } from "react-icons/fa6"

import { useState } from "react"

const NavBar = () => {

    const [value, setValue] = useState(false)
    const FilterData = useContext(GlobalDataContext)
    const [activeMenu, setActiveMenu] = useState("todos os produtos")

    const menus = ["todos os produtos", "camisa", "tenis", "sapato", "bolsa"]    
    
    const menuMobiles = [
        { icon: <FaDumpster/>, name: "todos os produtos" },
        { icon: <FaShirt/> , name: "camisa" },
        { icon: <PiSneakerFill/> , name: "tenis" },
        { icon: <GiRunningShoe/> , name: "sapato" },
        { icon: <FaShoppingBag/> , name: "bolsa" }
    ]
    
    function filterCategory(menuAndCategory) {

        setActiveMenu(menuAndCategory)

        fetch(`https://ecommerceapi-8obj.onrender.com/products/${menuAndCategory}`)
        .then(res => {
            return res.json()
        }).then(data => {
            FilterData.setFilterValue(data)
        }).catch(error => {
            console.log(error)
        })

    }
        
    return (
        <>
            <nav className="desktop">
                <ul>
                    {
                        menus.map((menu, index) => (
                            <li 
                                key={index} 
                                className={`menu-item ${activeMenu == menu ? "active" : ""}`}
                            >
                                <Link 
                                    onClick={
                                        () => filterCategory(menu)
                                    } 
                                    to={menu !== "todos os produtos" ? `/${menu}`: "/"}
                                >
                                    {menu}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <nav className="mobile">
                <ul>
                    {
                        menuMobiles.map((menu, index) => (
                            <li 
                                key={index}
                            >
                                <Link 
                                    className={`menu-item-mobile ${activeMenu == menu.name ? "activeMobile" : ""}`}
                                    onClick={
                                        () => filterCategory(menu.name)
                                    }
                                    to={menu.name !== "todos os produtos" ? `/${menu.name}` : ""}
                                >
                                    {menu.icon}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )

}

export default NavBar