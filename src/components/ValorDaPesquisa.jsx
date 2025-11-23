import "./CardItem.css"
import { Link } from "react-router-dom"

const ValorDaPesquisa = ({products}) => {

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className="cardProduct">
                    <Link 
                        to={`/product/${product.id}`}
                    >
                        <img 
                            className="img_" 
                            src={product.image} 
                            alt={product.name}
                        />
                    </Link>
                    <span>{product.name}</span>
                    <small>
                        <strong>usd {product.price}</strong>
                    </small>
                </div>
            ))}
        </>
    )
}

export default ValorDaPesquisa