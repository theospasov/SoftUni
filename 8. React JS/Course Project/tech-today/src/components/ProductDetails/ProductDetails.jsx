
import { useState } from 'react'
import './ProductDetails.css'

export function ProductDetails() {
    const [counter, setCounter] = useState(0)

    function counterClick() {
        setCounter(prevState => prevState + 1)
    }    
    return (
        <article className="product-details">
             <img className="details-image" src="https://images.hothardware.com/contentimages/article/3292/content/small_angle-2-apple-macbook-pro-14-m2-pro-2023.jpg" />
             <div className='details-details'>
                <h1 className="details-name">Macbook Pro (14-inch)</h1>
                <p className="details-price"> Price: <span>$999</span></p>
                <div className="details-brand">
                    <p>Brand: <span>Apple</span></p>
                    <img src="https://www.svgrepo.com/show/69341/apple-logo.svg" />
                </div>
                <button onClick={counterClick}>Like <span>{counter}</span></button>
             </div>

        </article>
    )
}