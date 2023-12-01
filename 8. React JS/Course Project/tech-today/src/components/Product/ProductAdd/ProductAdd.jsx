import { useNavigate } from 'react-router-dom'

import * as productService from '../../../services/productService'


export default function ProductAdd() {
    const navigate = useNavigate();
    
    const productAddHandler = async (e) => {
        e.preventDefault()

        const productData = Object.fromEntries(new FormData(e.currentTarget))
        
        try {
            await productService.add(productData)

        } catch (error) {
            // TODO: Error notification
            console.log(error);
        }
        navigate('/')
    }
    return (
        <div className="page-register">
            <form className="login-form" onSubmit={productAddHandler}>
                <h1>Add New Product</h1>
                <label htmlFor="name">Name</label>
                <input 
                    id="name"
                    name="name"
                    type="text"
                    className="form-name"
                    placeholder="iPhone 15 Pro"

                />
                <label htmlFor="price">Price</label>
                <input 
                    id="price"
                    name="price"
                    type="text"
                    className="form-price"
                    placeholder="999.99"
                />
                <label htmlFor="imageUrl">Image Link</label>
                <input 
                   id="imageUrl"
                   name="imageUrl"
                    type="url"
                    className="form-image"
                    placeholder="www.image.com/image.jpg"
                />
                <label htmlFor="description">Description</label>
                <textarea 
                   id="description"
                   name="description"
                    type="textarea"
                    className="form-image"
                    placeholder=""
                />
                <input className='submit-button' type="submit" value="Submit" />
            </form>
    </div>
    )
}