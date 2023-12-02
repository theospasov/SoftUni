import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './ProductDetails.css'

import * as productService from '../../../services/productService'
import * as commentService from '../../../services/commentService'

export default function ProductDetails() {
    const [counter, setCounter] = useState(0)
    const [product, setProduct] = useState({})
    const [comments, setComments] = useState([])
    const {productId} = useParams()

    useEffect(() => {
        // TODO : add validation
        productService.getOne(productId)
            .then(setProduct)
        commentService.getAll(productId)
            .then(setComments)
    }, [productId])

    const addCommentHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        
        const newComment = await commentService.add(productId, formData.get('comment-form-username'), formData.get('comment-form-text'))

        setComments(prevState =>  [...prevState, newComment])
        // console.log(newComment);
    }

    function counterClick() {
        setCounter(prevState => prevState + 1)
    }    
    return (
        <>
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
            <div className='product-comments'>
                <div className='add-comment'>
                    <form className="add-comment-form" onSubmit={addCommentHandler}>
                        <input type="text" name="comment-form-username" placeholder='username' />
                        <textarea name="comment-form-text" cols="30" rows="10" placeholder='comment'></textarea>
                        <input type="submit" value="Post comment " />
                    </form>
                </div>
                <div className='product-comments'>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment._id} className='comment'>
                                <h3 className='comment-user'>{comment.username}</h3>
                                <p className='comment-text'>{comment.text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p>No comments</p>
                    )}
                </div>
            </div>
        </>

    )
}