import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import './ProductDetails.css'

import * as productService from '../../../services/productService'
import * as commentService from '../../../services/commentService'
import AuthContext from '../../../contexts/authContext'

export default function ProductDetails() {
    const navigate = useNavigate()
    const {email, userId} = useContext(AuthContext)
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
        
        const newComment = await commentService.add(
            productId, 
            formData.get('comment-form-text')
        )
            
        setComments(prevState =>  [...prevState, {...newComment, owner: email}])
        
    }
   
    const isOwner = userId === product._ownerId
   
    const deleteButtonClickHandler = async () => {
        
        await productService.remove(productId)
        navigate('/')
    }


    return (
        <div className='product-page'>
            <article className="product-details">
                <img className="details-image" src={product.imageUrl} />
                <div className='details-details'>
                    <h1 className="details-name">{product.name}</h1>
                    <p className="details-price"> Price: <span>${product.price}</span></p>
                    <div className="details-brand">
                        <p>Brand: <span>Apple</span></p>
                        <img src="https://www.svgrepo.com/show/69341/apple-logo.svg" />
                    </div>
                    
                    <p>{product.description}</p>
                    { isOwner && (
                        <div className='owner-controls'>
                            <Link to={`/products/${product._id}/edit`} className='button'>Edit</Link>
                            <button className='button' onClick={deleteButtonClickHandler}>Delete</button>
                        </div>
                        )

                    }

                </div>

            </article>
            <div className='product-comments'>
                <div className='add-comment'>
                    <form className="add-comment-form" onSubmit={addCommentHandler}>
                        {/* <input type="text" name="comment-form-username" placeholder='username' /> */}
                        <textarea name="comment-form-text" cols="30" rows="3" placeholder='comment'></textarea>
                        <input type="submit" value="Post comment " />
                    </form>
                </div>
                <div className='product-comments'>
                    <ul>
                        {comments.map(({_id, text, owner: {email}}) => (
                            <li key={_id} className='comment'>
                                <h3 className='comment-user'>{email}</h3>
                                <p className='comment-text'>{text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p>No comments</p>
                    )}
                </div>
            </div>
        </div>

    )
}