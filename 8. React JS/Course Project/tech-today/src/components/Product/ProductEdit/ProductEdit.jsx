import { useNavigate, useParams } from 'react-router-dom'


import * as productService from '../../../services/productService'
import useForm from '../../../hooks/useForm';
import { useEffect, useState } from 'react';


export default function ProductEdit() {
    const navigate = useNavigate();
    const {productId} = useParams()
    const [product, setProduct] = useState({
        name: '',
        price: '',
        imageUrl: '',
        description: ''
    })

    useEffect(() => {
        productService.getOne(productId)
            .then( result => {
                setProduct(result)
            })
    }, [productId])
    
    const productEditHandler = async (e) => {
        e.preventDefault()

        const values = Object.fromEntries( new FormData(e.currentTarget))
        try {
            await productService.edit(productId, values)
            navigate(`/products/${productId}`)

        } catch (error) {
            // TODO: Error notification
            console.log(error);
        }
        
    }

    const onChange = (e) => {
        setProduct(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    return (
        <div className="page-register">
            <form className="login-form" onSubmit={productEditHandler}>
                <h1>Add New Product</h1>
                <label htmlFor="name">Name</label>
                <input 
                    id="name"
                    name="name"
                    type="text"
                    className="form-name"
                    placeholder="iPhone 15 Pro"
                    onChange={onChange}
                    value={product.name}

                />
                <label htmlFor="price">Price</label>
                <input 
                    id="price"
                    name="price"
                    type="text"
                    className="form-price"
                    placeholder="999.99"
                    onChange={onChange}
                    value={product.price}
                />
                <label htmlFor="imageUrl">Image Link</label>
                <input 
                   id="imageUrl"
                   name="imageUrl"
                    type="url"
                    className="form-image"
                    placeholder="www.image.com/image.jpg"
                    onChange={onChange}
                    value={product.imageUrl}
                />
                <label htmlFor="description">Description</label>
                <textarea 
                   id="description"
                   name="description"
                    type="textarea"
                    className="form-image"
                    placeholder=""
                    onChange={onChange}
                    value={product.description}
                />
                <input className='submit-button' type="submit" value="Edit Product" />
            </form>
    </div>
    )
}