import { Link } from 'react-router-dom'


export const ProductAdd = () => {
    return (
        <div className="page-register">
        <form className="login-form" method="POST" action="#">
            <h1>Add New Product</h1>
            <label htmlFor="product-name">Name</label>
            <input 
                id='product-name'
                type="text"
                className="form-name"
                placeholder="iPhone 15 Pro"

            />
            <label htmlFor="product-price">Price</label>
            <input 
                id='product-price'
                type="text"
                className="form-price"
                placeholder="$999"
            />
            <label htmlFor="product-image">Image Link</label>
            <input 
                id='product-image'
                type="text"
                className="form-image"
                placeholder="www.image.com/image.jpg"
            />
            <input type="submit" value="Submit" />
        </form>
    </div>
    )
}