import "./CardItem.css"

const CardItem = ({products}) => {

    return (
        <>
            {products.map((product) => (
                    <div key={product.id} className="cardProduct">
                        <img className="img_" src={product.image}/>
                        <span>{product.name}</span>
                        <small><strong>usd {product.price}</strong></small>
                    </div>
                )
            )}
        </>
    )
}

export default CardItem