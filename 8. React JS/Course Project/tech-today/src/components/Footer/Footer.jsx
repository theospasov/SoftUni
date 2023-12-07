import { Link } from 'react-router-dom'

import './Footer.css'

import LogoIconWhite from '../../assets/tt_logo-icon-white.png'

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className='footer-nav'>
                <p>TechToday is the ultimate place to discover new tech and the coolers gadgets.</p>
                {/* <Link to={'/'}>Home</Link> */}
                {/* <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link> */}
            </div>
            <div className='footer-rights'>
                <p>TechToday© | All rights reserved</p>
            </div>
            <div className='footer-brand'>
            <img src={LogoIconWhite} className='footer-logo'/>
            
            </div>
        </footer>
        
    )
}