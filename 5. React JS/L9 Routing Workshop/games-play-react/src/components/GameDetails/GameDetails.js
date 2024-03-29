import { useParams } from "react-router-dom" 
import { useEffect, useState } from "react"

import * as gameService from '../../services/gameService'
import * as commentService from '../../services/commnetService'

export function GameDetails() {
    const {gameId} = useParams()

    const [game, setGame] = useState({})
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])


    useEffect(() => {
        gameService.getOne(gameId)
        .then(res => {
          commentService.getAll(gameId)
            setGame(res)
            return commentService.getAll(gameId)
        })
        .then(result => {
          setComments(result)
        })
    }, [gameId])

    const onCommentSubmit = async (e) => {
      e.preventDefault()
      await commentService.crate({
        gameId,
        username,
        comment
      })
      setUsername('')
      setComment('')
    }

  

    return (
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="game-header">
            <img className="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">{game.maxLevel}</span>
            <p className="type">{game.category}</p>
          </div>
          <p className="text">
            {game.summary}
          </p>
          {/* Bonus ( for Guests and Users ) */}
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {/* list all comments for current game (If any) */}
              <li className="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li className="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
            {/* Display paragraph: If there are no games in the database */}
            <p className="no-comment">No comments.</p>
          </div>
          {/* Edit/Delete buttons ( Only for creator of this game )  */}
          <div className="buttons">
            <a href="#" className="button">
              Edit
            </a>
            <a href="#" className="button">
              Delete
            </a>
          </div>
        </div>
        {/* Bonus */}
        {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={onCommentSubmit}>
            <input type="text" name="username" placeholder="user1123" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <textarea
              name="comment"
              placeholder="Comment......"
              value={comment} onChange={(e) => setComment(e.target.value)}
            />
            <input
              className="btn submit"
              type="submit"
              value="Add Comment"
            />
          </form>
        </article>
      </section>
    )
}