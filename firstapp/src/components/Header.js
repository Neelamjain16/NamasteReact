import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/contants"
import {Link} from 'react-router-dom'
const Header=()=>{
   const [btnName,setBtnName]=useState('Login')

   console.log('header rendered');

   useEffect(()=>{
    console.log('use effect gets called')
   },[btnName])
    return (
        <div className="header">
           <div className="logo-container">
            <img src={LOGO_URL} className='logo'/>
           </div>
           <div className="nav-items">
                   <ul>
                   <li><Link to='/'>Home</Link></li>  
                    {/* <li>About Us</li> */}
                    <li><Link to='/about'>About</Link></li>  
                    <li><Link to='/contact'>Contact Us</Link></li>
                 
                    <li>Cart</li>
                    <button className="login" onClick={()=>{btnName==='Login'?setBtnName('Logout'):setBtnName('Login')}}>{ btnName}</button>
                   </ul>
           </div>
        </div>
    )
}

export default Header