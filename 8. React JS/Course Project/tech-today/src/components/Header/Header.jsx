import { Link } from 'react-router-dom'

import './Header.css'

import LogoIcon from '../../assets/tt_logo-icon.png'
import LogoText from '../../assets/tt_logo-text.png'


export const Header = () => {
    return (
        <>  
            <header className='site-header'>
                
                <Link to={'/'}><img src={LogoIcon} className='header-logo-icon'/></Link>
                <img src={LogoText} className='header-logo-text' />
                
                <ul className='header-nav'>
                    <li><Link className='nav-home nav' to='/'>Home</Link></li>
                    <li><Link className='nav-login nav' to='/login'>Login</Link></li>
                    <li><Link className='nav-add nav' to={'/product/add'}>Add New Product</Link></li>
                </ul>
            </header>

        </>
    )
}