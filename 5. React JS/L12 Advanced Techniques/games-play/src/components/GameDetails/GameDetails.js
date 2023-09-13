import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { gameServiceFactory } from '../../services/gameService';
import * as commentService from '../../services/commentService'
import { useService } from '../../hooks/useService';
import {  useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

import { AddComment } from './AddComment/AddComment';

export const GameDetails = () => {

    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const gameService = useService(gameServiceFactory)
    const { userId, isAuthenticated } = useAuthContext()
    const {} = useForm({
        comment: ''
    }, )
    const navigate = useNavigate()

    useEffect(() => {
        Promise.all([
            gameService.getOne(gameId),
            commentService.getAll(gameId)
        ])
            .then(values => {
                console.log(values);
            })
        // gameService.getOne(gameId)
        //     .then(result => {
        //         setGame(result);
        //     })
    }, [gameId]);

    const onCommentSubmit = async (values) => {

       const response = await  commentService.create(gameId, values.comment)
        console.log(response);

     };

    const isOwner =  game._ownerId === userId

    const onDeleteClick = async () => {
        await gameService.delete(game._id)
        navigate('/catalog')
        // TODO: delete from state
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {game.comments && Object.values(game.comments).map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.username}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {/* {!Object.values(game.comments).length && (
                        <p className="no-comment">No comments.</p>
                    )} */}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${game._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                    
                )}
            </div>
                {isAuthenticated &&  <AddComment onCommentSubmit={onCommentSubmit}/> }

        </section>
    );
};