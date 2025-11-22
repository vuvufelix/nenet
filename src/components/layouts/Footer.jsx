import "./Footer.css"
import { FiLinkedin } from "react-icons/fi"

const Footer = () => {
    return (
        <footer>
            <div>
                <small>
                    <a href="https://ao.linkedin.com/in/vuvu-f%C3%A9lix-6a09a42a3" 
                        target="_blank" 
                        rel="external"
                    >
                        LinkedIn do criador <FiLinkedin/>
                    </a>
                </small>
                <small>&copy; 2025 Nenet - Todos Direitos Reservados</small>
            </div>
        </footer>
    )
}

export default Footer