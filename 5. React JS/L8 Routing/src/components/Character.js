import { Link } from 'react-router-dom'

export const Character = ({
    name
}) => {
    return(
        <li>
            <Link to={`/character/${name}</li>`}>{name}</Link>
        </li>
    )
}

// <li>{c.name}</li>