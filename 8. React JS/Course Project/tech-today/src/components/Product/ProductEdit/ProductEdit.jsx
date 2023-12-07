import { useNavigate, useParams } from 'react-router-dom'


import * as productService from '../../../services/productService'
import useForm from '../../../hooks/useForm';
import { useEffect, useState } from 'react';


export default function ProductEdit() {
    const navigate = useNavigate();
    const { productId } = useParams()
    const [product, setProduct] = useState({
        name: '',
        price: '',
        imageUrl: '',
        description: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        price: '',
        imageUrl: '',
        description: '',
    })

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                setProduct(result)
            })
    }, [productId])

    const productEditHandler = async (e) => {
        e.preventDefault()

        const values = Object.fromEntries(new FormData(e.currentTarget))
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

    function nameValidator() {
        if (product.name.length <= 3) {
            setErrors(prevState => ({
                ...prevState,
                name: 'Name should be at least 4 characters'
            }))
        } else {
            if (errors.name) {
                setErrors(prevState => ({
                    ...prevState,
                    name: ''
                }))
            }

        }
    }

    function priceValidator() {
        if (product.price < 1) {
            setErrors(prevState => ({
                ...prevState,
                price: 'Price should be at least $1'
            }))
        } else {
            if (errors.price) {
                setErrors(prevState => ({
                    ...prevState,
                    price: ''
                }))
            }
        }

    }

    function descriptionValidator() {
        if (product.description.length <= 10) {
            setErrors(prevState => ({
                ...prevState,
                description: 'Description should be at least 10 characters'
            }))
        } else {
            if (errors.description) {
                setErrors(prevState => ({
                    ...prevState,
                    description: ''
                }))
            }
        }
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
                        onBlur={nameValidator}
                    />
                    {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )
                    }
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="numbe-1"
                        className="form-price"
                        placeholder="999.99"
                        onChange={onChange}
                        value={product.price}
                        onBlur={priceValidator}

                    />
                    {errors.price && (
                        <p className='error'>{errors.price}</p>
                    )}
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
                        onBlur={descriptionValidator}
                    />
                    {errors.description && (
                        <p className='error'>{errors.description}</p>
                    )}
                    <input className='submit-button' type="submit" value="Edit Product" disabled={Object.values(errors).some(x => x)} />
                </form>
            </div>
        )
}
