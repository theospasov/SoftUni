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

