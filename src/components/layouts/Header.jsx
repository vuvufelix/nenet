import { FaMagnifyingGlass } from "react-icons/fa6"
import { FaCartShopping } from "react-icons/fa6"
import { FaGem } from "react-icons/fa6"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {

    function removeToggle() {
        Array.from(document.getElementsByTagName("a")).forEach(element => {
            if(element.className == "toggle") {
                element.classList.remove("toggle")
            }
        })
    }

    return (
        <header>
            <div className="header-container">
                <div className="nenet-title">
                    <FaGem className="logo-title"/>
                    <h1>Nenet</h1>
                </div>
                <div className="search-info-container">
                    <form>
                        <input type="text" placeholder="Procurando por algo específico?"/>
                        <button><FaMagnifyingGlass/></button>
                    </form>
                    <Link onClick={removeToggle} className="carBuy" to={"/carrinho"}>
                        <FaCartShopping/>
                        <span className="quantity">5</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header