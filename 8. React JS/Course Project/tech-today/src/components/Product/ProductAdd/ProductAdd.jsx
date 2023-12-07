import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as productService from '../../../services/productService';

export default function ProductAdd() {
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        imageUrl: '',
        description: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        price: '',
        imageUrl: '',
        description: '',
    })

    const [generalError, setGeneralError] = useState('');

    const productAddHandler = async (e) => {
        e.preventDefault();

        try {
            await productService.add(productData);
        } catch (error) {
            setGeneralError('An error occurred while adding the product.');
            console.error(error);
        }

        navigate('/');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setProductData({
            ...productData,
            [name]: value,
        });
    };

    function nameValidator() {
        if (productData.name.length <= 3) {
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
        if (productData.price < 1) {
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
        if (productData.description.length <= 10) {
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
            {generalError && (
          <p className="error">{generalError}</p>
        )}
            <form className="login-form" onSubmit={productAddHandler}>
                <h1>Add New Product</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-name"
                    placeholder="iPhone 15 Pro"
                    value={productData.name}
                    onChange={handleInputChange}
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
                    type="number"
                    className="form-price"
                    placeholder="999.99"
                    value={productData.price}
                    onChange={handleInputChange}
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
                    value={productData.imageUrl}
                    onChange={handleInputChange}
                />
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    type="textarea"
                    className="form-image"
                    placeholder=""
                    rows="6"
                    value={productData.description}
                    onChange={handleInputChange}
                    onBlur={descriptionValidator}

                />
                {errors.description && (
                    <p className='error'>{errors.description}</p>
                )}
                <input className="submit-button" type="submit" value="Submit" disabled={Object.values(errors).some(x => x)} />
            </form>
        </div>
    );
}
