import { FaMagnifyingGlass } from "react-icons/fa6"
import { FaCartShopping } from "react-icons/fa6"
import { FaLeaf } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"
import "./Header.css"
import GlobalDataContext from "../../context/DadosGlobais.jsx"
import { useContext, useState } from "react"
import { FaRegSun } from "react-icons/fa6"
import { FaRegMoon } from "react-icons/fa6"

const Header = () => {

    const DataProject = useContext(GlobalDataContext)
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    function removeToggle() {
        Array.from(document.getElementsByTagName("a")).forEach(element => {
            if(element.className == "toggle") {
                element.classList.remove("toggle")
            }

            if(element.className == "bg") {
                element.classList.remove("bg")
            }
        })
    }

    function redirectSearch(e) {
        e.preventDefault()
        navigate(`/search/${search}`)
        setSearch("")
    }

    function theme() {
        const html = document.querySelector("html")
        html.classList.toggle("dark-mode")
    }

    return (
        <header>
            <div className="header-container">
                <div className="nenet-title">
                    <FaLeaf className="logo-title"/>
                    <h1>Nenet</h1>
                </div>
                <div className="search-info-container">
                    <form>
                        <input 
                            type="text" 
                            placeholder="Procurando por algo específico?"
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button onClick={(e) => redirectSearch(e)}><FaMagnifyingGlass/></button>
                    </form>
                    <Link 
                        onClick={removeToggle} 
                        className="carBuy" 
                        to={"/carrinho"}
                    >
                        <FaCartShopping/>
                        { 
                            DataProject.valueLocalStorage.length > 0 && 
                            <span 
                                className="quantity"
                            >
                                {DataProject.valueLocalStorage.length}
                            </span> 
                        }
                    </Link>
                    <div className="toggleTheme" onClick={theme}>
                        <FaRegSun className="icon-day"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header