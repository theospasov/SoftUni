import { Link } from 'react-router-dom'

import './ProductCard.css'

export function ProductCard(product) {

    return (
        <>
            <div className="product-card">
                <img className="card-image" src={product.imageUrl} alt="" />
                <h2 className="card-name">{product.name}</h2>
                <p>Price: <span>${product.price}</span></p>
                <Link to={`/products/${product._id}`}>Details</Link>
            </div>
        </>
    )
}