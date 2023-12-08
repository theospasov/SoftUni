import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import './Profile.css'

import ProductProfile from "../Product/ProductProfile/ProductProfile"
import Path from "../../paths"

export default function Profile() {



    return (
        <div className="user-profile">
            <ul className="profile-options">
                    <li><Link className='profile-nav-add profile-nav' to={'/product/add'}>Add New Product</Link></li>
                    <li><Link className='profile-nav-logout profile-nav' to={Path.Logout}>Logout</Link></li>
            </ul>
            <ProductProfile/>
 
        </div>
    )
}

// http://localhost:3030/data/products?where=_ownerId%3D%2235c62d76-8152-4626-8712-eeb96381bea8%22
// http://localhost:3030/data/products?where=_ownerId=%2260f0cf0b-34b0-4abd-9769-8c42f830dffc%22