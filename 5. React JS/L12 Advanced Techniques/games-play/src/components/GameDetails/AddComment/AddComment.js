import { useForm } from "../../../hooks/useForm"

export function AddComment({
    onCommentSubmit
}) {
    const {formValues, changeFormHandler, onSubmit} = useForm({
        comment: ''
    }, onCommentSubmit)
    return (

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" placeholder="Comment......" value={formValues.comment} onChange={changeFormHandler}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
    )
}