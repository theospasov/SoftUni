import { Link } from 'react-router-dom'


// import './Footer.css'
import FooterCSS from  './Footer.module.css'
import LogoIconWhite from '../../assets/tt_logo-icon-white.png'

export const Footer = () => {
    return (
        <footer className={FooterCSS.siteFooter}>
            <div className={FooterCSS.footerNav}>
                <p style={{fontWeight: "bold"}}>TechToday is the ultimate place to discover new tech and the coolers gadgets.</p>
            </div>
            <div className={FooterCSS.footerRights}>
                <p>TechToday© | All rights reserved</p>
            </div>
            <div className='footer-brand'>
            <img src={LogoIconWhite} className={FooterCSS.footerLogo}/>
            
            </div>
        </footer>
        
    )
}