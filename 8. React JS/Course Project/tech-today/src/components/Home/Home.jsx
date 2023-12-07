import { useState, useEffect } from 'react'

import { ProductCard } from '../Product/ProductCard/ProductCard'
import * as productService from '../../services/productService'

import './Home.css'

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
      productService.getAll()
        .then(result => setProducts(result))
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <h1 className='home-title'>Latest Products</h1>
            <div className='product-grid'>
                {products.reverse().map(product => (
                    <ProductCard {...product} key={product._id} />
                ))}
                {products.length === 0 && <h2 className='no-products'>No products yet</h2>}
            </div>

            
        </>
    )
}