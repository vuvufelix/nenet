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
            fetch(`https://api-nenet.vercel.app/products/${event.target.innerHTML}`)
            .then(res => {
                return res.json()
            }).then(data => {
                FilterData.setFilterValue(data)
            }).catch(error => {
                console.log(error)
            })
        }

        if(event.target.innerHTML == "TODOS OS PRODUTOS") {
            fetch("https://api-nenet.vercel.app/products")
            .then(res => {
                return res.json()
            }).then(data => {
                FilterData.setFilterValue(data)
            }).catch(error => {
                console.error(error)
            })
        }
    }

    function allProducts(event) {
        setValue(false)

        Array.from(document.getElementsByTagName("a")).forEach(element => {
            if(element.className == "bg") {
                element.classList.remove("bg")
            }
        })

        setValue(true)

        if(value) {
            event.target.parentNode.parentNode.classList.add("bg")
        }


        fetch("https://api-nenet.vercel.app/products")
        .then(res => {
            return res.json()
        }).then(data => {
            FilterData.setFilterValue(data)
        }).catch(error => {
            console.error(error)
        })
    }

    function shirt(event) {
        setValue(false)

        Array.from(document.getElementsByTagName("a")).forEach(element => {
            if(element.className == "bg") {
                element.classList.remove("bg")
            }
        })

        setValue(true)

        if(value) {
            event.target.parentNode.parentNode.classList.add("bg")
        }

        fetch(`https://api-nenet.vercel.app/products/camisa`)
        .then(res => {
            return res.json()
        }).then(data => {
            FilterData.setFilterValue(data)
        }).catch(error => {
            console.error(error)
        })
    }

    function sneaker(event) {
        setValue(false)

        Array.from(document.getElementsByTagName("a")).forEach(element => {
            if(element.className == "bg") {
                element.classList.remove("bg")
            }
        })

        setValue(true)

        if(value) {
            event.target.parentNode.parentNode.classList.add("bg")
        }

        fetch(`https://api-nenet.vercel.app/products/tenis`)
        .then(res => {
            return res.json()
        }).then(data => {
            FilterData.setFilterValue(data)
        }).catch(error => {
            console.error(error)
        })
    }

    function shoe(event) {
        setValue(false)

        Array.from(document.getElementsByTagName("a")).forEach(element => {
            if(element.className == "bg") {
                element.classList.remove("bg")
            }
        })

        setValue(true)

        if(value) {
            event.target.parentNode.parentNode.classList.add("bg")
        }

        fetch(`https://api-nenet.vercel.app/products/sapato`)
        .then(res => {
            return res.json()
        }).then(data => {
            FilterData.setFilterValue(data)
        }).catch(error => {
            console.error(error)
        })
    }

    function bag(event) {
        setValue(false)

        Array.from(document.getElementsByTagName("a")).forEach(element => {
            if(element.className == "bg") {
                element.classList.remove("bg")
            }
        })

        setValue(true)

        if(value) {
            event.target.parentNode.parentNode.classList.add("bg")
        }

        fetch(`https://api-nenet.vercel.app/products/bolsa`)
        .then(res => {
            return res.json()
        }).then(data => {
            FilterData.setFilterValue(data)
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <>
            <nav className="desktop">
                <ul>
                    <li><Link onClick={(e) => funcNavToggle(e)} to={"/"}>todos os produtos</Link></li>
                    <li><Link onClick={(e) => funcNavToggle(e)} to={"/camisetas"}>camisa</Link></li>
                    <li><Link onClick={(e) => funcNavToggle(e)} to={"/tenis"}>tenis</Link></li>
                    <li><Link onClick={(e) => funcNavToggle(e)} to={"/sapatos"}>sapato</Link></li>
                    <li><Link onClick={(e) => funcNavToggle(e)} to={"/bolsas"}>bolsa</Link></li>
                </ul>
            </nav>
            <nav className="mobile">
                <ul>
                    <li><Link onClick={(e) => allProducts(e)} to={"/"}><FaDumpster/></Link></li>
                    <li><Link onClick={(e) => shirt(e)} to={"/camisetas"}><FaShirt/></Link></li>
                    <li><Link onClick={(e) => sneaker(e)} to={"/tenis"}><PiSneakerFill/></Link></li>
                    <li><Link onClick={(e) => shoe(e)} to={"/sapatos"}><GiRunningShoe/></Link></li>
                    <li><Link onClick={(e) => bag(e)} to={"/bolsas"}><FaShoppingBag/></Link></li>
                </ul>
            </nav>
        </>
    )

}

export default NavBar