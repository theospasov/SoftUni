import { useState } from "react"

export function CreateGame({
  onCreateGameSubmit
}) {

  const [values, setValues] = useState({
    title: '', 
    category: '',
    maxLevel: '',
    imageUrl: '',
    summary: ''
  })

  const onChangeHandler = (e) => {
    setValues(prevState => ({...prevState, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onCreateGameSubmit(values)

  }

    return (
        <section id="create-page" className="auth">
        <form id="create" onSubmit={onSubmit}>
          <div className="container">
            <h1>Create Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter game title..."
              value={values.title}
              onChange={onChangeHandler}
            />
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter game category..."
              value={values.category}
              onChange={onChangeHandler}

            />
            <label htmlFor="levels">MaxLevel:</label>
            <input
              type="number"
              id="maxLevel"
              name="maxLevel"
              min={1}
              placeholder={1}
              value={values.maxLevel}
              onChange={onChangeHandler}

            />
            <label htmlFor="game-img">Image:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Upload a photo..."
              value={values.imageUrl}
              onChange={onChangeHandler}

            />
            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary" 
                          value={values.summary}
                          onChange={onChangeHandler}
                           />
            <input
              className="btn submit"
              type="submit"
              value="Create New Game"


            />
          </div>
        </form>
      </section>
    )
}
