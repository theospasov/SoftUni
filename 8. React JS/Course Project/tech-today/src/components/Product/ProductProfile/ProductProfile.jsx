import { useContext, useEffect, useState } from "react"

import './ProductProfile.css'

import * as productService from '../../../services/productService'
import AuthContext from "../../../contexts/authContext"
import { ProductCard } from "../ProductCard/ProductCard"

export default function ProductProfile() {
    const [products, setProducts] = useState([])
    const {userId, username} = useContext(AuthContext)
    
    useEffect(() => {
        productService.getAllUserCreated(userId)
            .then(result => setProducts(result))
            .catch(err => {
                console.log(err);
            })

    }, [])


    return (
        <div className="profile-products">
            <h2>Hey {username} 👋, {products.length >= 1 ? <span>these are your added products</span> : <span>add some products and they will appear here</span>}</h2>
            <div className="added-products">
                {products.map(product => (
                    <div className="profile-product" key={product._id}>
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>

        </div>
    )
}

//http://localhost:3030/data/products?where=_ownerId%3D%2235c62d76-8152-4626-8712-eeb96381bea8%22