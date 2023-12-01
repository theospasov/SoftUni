import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './ProductDetails.css'

import * as productService from '../../../services/productService'

export default function ProductDetails() {
    const [counter, setCounter] = useState(0)
    const [product, setProduct] = useState({})
    const {productId} = useParams()

    useEffect(() => {
        // TODO : add validation
        productService.getOne(productId)
            .then(setProduct)
    }, [productId])



    function counterClick() {
        setCounter(prevState => prevState + 1)
    }    
    return (
        <article className="product-details">
             <img className="details-image" src={product.imageUrl} />
             <div className='details-details'>
                <h1 className="details-name">{product.name}</h1>
                <p className="details-price"> Price: <span>${product.price}</span></p>
                <div className="details-brand">
                    <p>Brand: <span>Apple</span></p>
                    <img src="https://www.svgrepo.com/show/69341/apple-logo.svg" />
                </div>
                <button onClick={counterClick}>Like <span>{counter}</span></button>
                <p>{product.description}</p>
             </div>

        </article>
    )
}