import { Link } from 'react-router-dom'
import { useContext } from 'react'

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faIdCardClip } from '@fortawesome/free-solid-svg-icons'


import AuthContext from '../../contexts/authContext'
import Path from '../../paths'


import LogoIcon from '../../assets/tt_logo-icon.png'
import LogoText from '../../assets/tt_logo-text.png'



export const Header = () => {
    const {
        isAuthenticated,
        username
    } = useContext(AuthContext)


    return (
        <>  
            <header className='site-header'>
                
                <Link to={'/'}><img src={LogoIcon} className='header-logo-icon'/></Link>
                <img src={LogoText} className='header-logo-text' />
                
                <ul className='header-nav'>

                    {isAuthenticated 
                    ? (
                        <div className='user'>
                            <li className='greeting'>Hey {username} 👋</li>
                            <li><Link className='nav-home nav' to='/'><FontAwesomeIcon icon={faHouse} /></Link></li>
                            <li><Link className='nav-profile nav' to='/profile'><FontAwesomeIcon icon={faIdCardClip} /></Link></li>
                            {/* <li><Link className='nav-add nav' to={'/product/add'}>Add New Product</Link></li>  */}
                            {/* <li><Link className='nav-logout nav' to={Path.Logout}>Logout</Link></li> */}
                            
                        </div>
                    )
                    : (
                        <div className='guest'> 
                            <li><Link className='nav-home nav' to='/'><FontAwesomeIcon icon={faHouse} /></Link></li>
                            <li><Link className='nav-profile nav' to={Path.Login}><FontAwesomeIcon icon={faUser} /></Link></li>
                        </div>
                    )
                    }
                    
                </ul>
            </header>

        </>
    )
}