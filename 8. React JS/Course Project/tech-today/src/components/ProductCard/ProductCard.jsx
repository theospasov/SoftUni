import { Link } from 'react-router-dom'

import './ProductCard.css'

export function ProductCard() {
    return (
        <>
            <div className="product-card">
                <img className="card-image" src="https://images.hothardware.com/contentimages/article/3292/content/small_angle-2-apple-macbook-pro-14-m2-pro-2023.jpg" alt="" />
                <h2 className="card-name">MacBook Pro 14</h2>
                <p>Price: <span>$999</span></p>
                <Link to={'/product/details'}>Details</Link>
            </div>
        </>
    )
}