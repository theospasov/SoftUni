import { Link, NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><NavLink to="/"
                        style={({ isActive }) =>
                        isActive ? { color: 'red' } : {}}
                        >Home
                </NavLink>
                </li>
                <li><NavLink to="/about"
                    className={({ isActive }) =>
                        isActive && styles['activeStyle'] }>
                    About
                </NavLink >
                </li>
                <li><Link to="/characters">Characters</Link></li>

            </ul>

        </nav>
    )
}